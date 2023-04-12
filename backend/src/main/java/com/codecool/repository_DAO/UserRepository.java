package com.codecool.repository_DAO;

import com.codecool.data.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
