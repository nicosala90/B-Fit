package com.codecool.data.user;

import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.UserRepository;
import com.codecool.service.UserService;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class RegisteredUser extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String userName;
    private String password;
    private String emailAddress;
    private String address;
    @OneToMany
    @OneToMany
    @jakarta.persistence.MapKey
    private Map<LocalDate, Double> BMIResults;

    public RegisteredUser(int age, Gender gender, double weight, double height, String userName, String password, String emailAddress, String address, Map<LocalDate, Double> BMIResults) {
        super(age, gender, weight, height);
        this.userName = userName;
        this.password = password;
        this.emailAddress = emailAddress;
        this.address = address;
        this.BMIResults = BMIResults;
    }

    public double calculateBMI(){
        UserService userService = null;
        return userService.calculateBMI(getWeight(),getHeight());
    }


    @Override
    public String toString() {
        return "RegisteredUser{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", address='" + address + '\'' +
                ", BMIResults=" + BMIResults +
                '}';
    }
}
