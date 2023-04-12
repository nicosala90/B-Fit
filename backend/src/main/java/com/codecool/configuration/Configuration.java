package com.codecool.configuration;

import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import com.codecool.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;


@org.springframework.context.annotation.Configuration
public class Configuration {

private UserRepository userRepository;
    @Bean
    public UserService userService(){
        Calculator calculator = new Calculator();
        return new UserService(userRepository, calculator);
    }
}
