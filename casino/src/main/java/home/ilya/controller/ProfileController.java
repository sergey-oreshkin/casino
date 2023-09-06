package home.ilya.controller;

import home.ilya.dto.BalanceDto;
import home.ilya.mapper.ProfileMapper;
import home.ilya.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("profile")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProfileController {

    private final ProfileService profileService;

    private final ProfileMapper profileMapper;

    @GetMapping("balance")
    public BalanceDto getBalance(@AuthenticationPrincipal UserDetails userDetails) {
        BalanceDto balanceDto = profileMapper.toBalanceDto(profileService.getBalance(userDetails.getUsername()));
        return balanceDto;
    }

    @GetMapping("username")
    public BalanceDto getUsername(@AuthenticationPrincipal UserDetails userDetails) {
        BalanceDto balanceDto = profileMapper.toBalanceDto(profileService.getBalance(userDetails.getUsername()));
        System.out.println(balanceDto);
        return balanceDto;
    }


}
