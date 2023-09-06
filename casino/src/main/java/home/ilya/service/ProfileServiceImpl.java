package home.ilya.service;

import home.ilya.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    private final UserRepository userRepository;

    @Override
    public Double getBalance(String login) {
        Double balance = userRepository.findByLogin(login).get().getBalance();
        return balance;
    }

    @Override
    public String getUsername(String login) {
        String username = userRepository.findByLogin(login).get().getLogin();
        return username;
    }
}
