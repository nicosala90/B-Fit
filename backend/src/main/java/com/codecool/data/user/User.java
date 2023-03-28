package com.codecool.data.user;

import com.codecool.logic.Calculator;

import java.util.ArrayList;
import java.util.List;

public class User {

    private int id;
    private int age;
    private Gender gender;
    private double weight;
    private double height;
    private Calculator calculator;
    private List<Double> BMIResults;

    public User(int age, Gender gender, double weight, double height) {
        this.id = 1;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.calculator = new Calculator();
        this.BMIResults = new ArrayList<>();
    }

    public double calculateBMI(){
        return calculator.BMICalculator(weight, height);
    }
    public void addBMIResult(){
        BMIResults.add(calculateBMI());
    }

    public int getId() {
        return id;
    }

    public int getAge() {
        return age;
    }

    public Gender getGender() {
        return gender;
    }

    public double getWeight() {
        return weight;
    }

    public double getHeight() {
        return height;
    }
}
