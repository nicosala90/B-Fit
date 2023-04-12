package com.codecool.controller;

import com.codecool.data.user.BMI;
import com.codecool.data.user.User;
import com.codecool.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registeredBMI")
    public double getBMI(@RequestBody User user) {
        return userService.calculateBMI(user);
    }

    @GetMapping("/bmi-list/{id}")
        public List<BMI> getBMIValuesByUser(@PathVariable Long id){
        return userService.getBMIValuesSortByDate(id);
    }


    @PostMapping
    public int createUser(@RequestBody User newUser) {
        userService.addUser(newUser);
        return 1;
    }
}
