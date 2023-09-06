package home.ilya.controller;

import home.ilya.dto.TokenDto;
import home.ilya.dto.UserDto;
import home.ilya.entity.User;
import home.ilya.mapper.UserMapper;
import home.ilya.repository.UserRepository;
import home.ilya.service.AuthService;
import home.ilya.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.antlr.v4.runtime.Token;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    private final UserMapper userMapper;
    private final ProfileService profileService;
    private final UserRepository userRepository;

    @PostMapping("signup")
    public TokenDto signup(@RequestBody UserDto userDto) {
        User user = userMapper.toEntity(userDto);
        String temp = user.getPassword();
        authService.signup(user);
        User freshUser = userMapper.toEntity(new UserDto(user.getLogin(),temp,0.0));
        return new TokenDto(authService.login(freshUser), freshUser.getLogin(),
                profileService.getBalance(freshUser.getLogin()));
    }

    @PostMapping("login")
    public TokenDto login(@RequestBody UserDto userDto) {

        User user = userMapper.toEntity(userDto);
        return new TokenDto(authService.login(user), user.getLogin(),profileService.getBalance(user.getLogin()));
    }
}
