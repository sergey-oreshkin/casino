package home.ilya.service;

import home.ilya.entity.User;
import home.ilya.exception.AuthException;
import home.ilya.exception.ConflictException;
import home.ilya.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;

    @Override
    public void signup(User user) {
        if (userRepository.existsByLogin(user.getLogin())) {
            throw new ConflictException("Login is already using");
        }
        user.setBalance(0.0);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public String login(User user) {
        User userEntity = userRepository.findByLogin(user.getLogin())
                .orElseThrow(AuthException::new);
        if (passwordEncoder.matches(user.getPassword(), userEntity.getPassword())) {
            return jwtService.getToken(user.getLogin());
        }
        throw new AuthException();
//        if (userRepository.existsByLogin(user.getLogin()) &&
//                userRepository.findByLogin(user.getLogin()).get(0).getPassword().
//                equals(user.getPassword())) {
//            return true;
//        }
//        return false;
    }


}
