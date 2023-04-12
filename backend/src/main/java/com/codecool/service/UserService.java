package com.codecool.service;

import com.codecool.data.user.User;
import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    private Calculator calculator;

    @Autowired
    public UserService(UserRepository userRepository, Calculator calculator) {
        this.userRepository = userRepository;
        this.calculator = calculator;
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow();
    }

    public double calculateBMI1(User user){
        return calculator.calculator(user.getWeight(), user.getHeight());
    }
    public Long calculateBMI2(double weight, double height){
        return (long) calculator.calculator(weight,height);
    }
}
