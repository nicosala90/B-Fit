package com.codecool.data.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class BMI {

    @Id
    @JsonIgnore
    private Long id;
    private double bmiValues;
    private LocalDate localDate;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private RegisteredUser registeredUser;

}
