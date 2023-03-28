package com.codecool.healthstate;

import com.codecool.data.user.Gender;
import com.codecool.data.user.User;

import java.util.ArrayList;
import java.util.List;

public class HealthState {

    private List<User> users;

    public HealthState() {
        this.users = new ArrayList<>();
    }
    public void addUser(int age, Gender gender, double weight, double height){
        users.add(new User(age, gender, weight, height));
    }
}
