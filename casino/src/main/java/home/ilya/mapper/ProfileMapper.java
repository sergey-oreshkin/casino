package home.ilya.mapper;

import home.ilya.dto.BalanceDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(componentModel = "spring")
public interface ProfileMapper {

    @Mapping(target = "balance", source = "balance")
    BalanceDto toBalanceDto(Double balance);

}
