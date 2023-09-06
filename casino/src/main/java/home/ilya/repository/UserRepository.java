package home.ilya.repository;

import home.ilya.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByLogin(String login);

    Optional<User> findByLogin(String login);


}
