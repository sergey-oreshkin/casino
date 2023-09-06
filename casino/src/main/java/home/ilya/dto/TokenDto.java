package home.ilya.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TokenDto {
    private String token;
    private String username;
    private Double balance;
}
