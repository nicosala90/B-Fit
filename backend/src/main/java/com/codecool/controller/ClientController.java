package com.codecool.controller;

import com.codecool.data.user.BMI;
import com.codecool.data.user.Client;
import com.codecool.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping("/registeredBMI")
    public double getBMI(@RequestBody Client client) {
        return clientService.calculateBMI(client);
    }

    @GetMapping("/bmi-list/{id}")
    public List<BMI> getBMIValuesByClient(@PathVariable Long id){
        return clientService.getBMIValuesSortByDate(id);
    }


    @PostMapping
    public int createUser(@RequestBody Client newClient) {
        clientService.addClient(newClient);
        return 1;
    }
}
