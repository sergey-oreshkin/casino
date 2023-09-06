package home.ilya.service;

public interface JwtService {
    String getToken(String username);

    String parseUsername(String token);
}
