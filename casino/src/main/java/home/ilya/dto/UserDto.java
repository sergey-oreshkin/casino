package home.ilya.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class UserDto {
    private Integer id;
    private String login;
    private String password;
    private Double balance;

    public UserDto(String login, String password, Double balance) {
        this.login = login;
        this.password = password;
        this.balance = balance;
    }
}
