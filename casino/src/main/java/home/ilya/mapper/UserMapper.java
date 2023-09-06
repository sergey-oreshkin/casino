package home.ilya.mapper;

import home.ilya.dto.UserDto;
import home.ilya.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toDto(User user);

    User toEntity(UserDto userDto);


}
