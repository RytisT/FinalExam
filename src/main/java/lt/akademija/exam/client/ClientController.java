package lt.akademija.exam.client;

import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @GetMapping("/api/clients")
    @ApiOperation(value = "Returns all flights that are currently in the list")
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @DeleteMapping("/api/clients/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientRepository.delete(id);
    }

    @PostMapping("/api/clients")
    public Client registerClient(@RequestBody Client client) {
        return clientRepository.save(client);
    }
}
