package com.codecool.controller;

import com.codecool.data.user.Client;
import com.codecool.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class ClientController {
    private ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

  /*  @PostMapping("/calculated-BMI")
    public double addUser(@RequestBody Client client) {
        return client.calculateBMI();
    }*/

    @PostMapping("/registeredBMI")
    public double getBMI(@RequestBody Client client) {
        return clientService.calculateBMI(client);
    }

   /* @PostMapping("/unregisteredBMI")
    public double getBMI2(@RequestBody Double weight, Double height) {
        return userService.calculateBMI2(weight,height);
    }*/

    @PostMapping
    public int createUser(@RequestBody Client newClient) {
        clientService.addClient(newClient);
        return 1;
    }
}
