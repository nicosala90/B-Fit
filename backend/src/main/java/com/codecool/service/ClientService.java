package com.codecool.service;

import com.codecool.data.user.BMI;
import com.codecool.data.user.Client;
import com.codecool.logic.Calculator;
import com.codecool.repository_DAO.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ClientService {

    private ClientRepository clientRepository;

    private Calculator calculator;

    @Autowired
    public ClientService(ClientRepository clientRepository, Calculator calculator) {
        this.clientRepository = clientRepository;
        this.calculator = calculator;
    }

    public void addClient(Client client){
        clientRepository.save(client);
    }

    public Client getUserById(Long id){
        return clientRepository.findById(id).orElseThrow();
    }

    public double calculateBMI(Client client){
        double BMIResult = calculator.calculator(client.getWeight(), client.getHeight());
        BMI bmi = BMI.builder()
                .bmiValues(BMIResult)
                .localDate(LocalDate.now())
                .client(client)
                .build();
        client.addCalculatedBMI(bmi);
        clientRepository.save(client);
        return BMIResult;
    }

}
