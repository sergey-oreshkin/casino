package home.ilya.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.ttl}")
    private Long ttl;
    @Value("${jwt.secret}")
    private String secretWord;

    @Override
    public String getToken(String username) {
        Date currentDate = new Date();
        Date expirationDate = new Date(currentDate.getTime() + ttl);
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(currentDate)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS256, secretWord)
                .compact();
    }

    @Override
    public String parseUsername(String token) {
        return Jwts.parser()
                .setSigningKey(secretWord)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }


}
