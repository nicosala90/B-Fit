package com.codecool.service;

import com.codecool.data.user.BMI;
import com.codecool.data.user.User;
import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

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

    public List<BMI> getBMIValuesSortByDate(Long id){
        User user = userRepository.findById(id).orElseThrow(RuntimeException::new);
        return user.getBmiValues()
                .stream()
                .sorted(Comparator.comparing(BMI::getLocalDate))
                .collect(Collectors.toList());
    }
}
