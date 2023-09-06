package home.ilya.service;

import home.ilya.entity.User;

public interface AuthService {
    void signup(User user);

    String login(User user);
}
