package com.codecool.controller;

import com.codecool.data.user.User;
import com.codecool.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

  /*  @PostMapping("/calculated-BMI")
    public double addUser(@RequestBody User user) {
        return user.calculateBMI();
    }*/

    @PostMapping("/registeredBMI")
    public double getBMI(@RequestBody User user) {
        return userService.calculateBMI(user);
    }
   /* @PostMapping("/unregisteredBMI")
    public double getBMI2(@RequestBody Double weight, Double height) {
        return userService.calculateBMI2(weight,height);
    }*/

    @PostMapping
    public int createUser(@RequestBody User newUser) {
        userService.addUser(newUser);
        return 1;
    }
}
