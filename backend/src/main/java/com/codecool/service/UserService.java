package com.codecool.service;

import com.codecool.data.user.User;
import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private Calculator calculator;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow();
    }

    public Long calculateBMI1(Long id){
        return (long) calculator.calculator(weight,height);
    }
    public Long calculateBMI2(double weight, double height){
        return (long) calculator.calculator(weight,height);
    }
}
