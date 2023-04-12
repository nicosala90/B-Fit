package com.codecool.service;

import com.codecool.data.user.BMI;
import com.codecool.data.user.User;
import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

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

    public double calculateBMI(User user){
        double BMIResult = calculator.calculator(user.getWeight(), user.getHeight());
        BMI bmi = BMI.builder()
                .bmiValues(BMIResult)
                .localDate(LocalDate.now())
                .user(user)
                .build();
        user.addCalculatedBMI(bmi);
        userRepository.save(user);
        return BMIResult;
    }

}
