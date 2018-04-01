package ch.mikenoethiger.epd.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ch.mikenoethiger.epd.model.Epd;

public interface EpdRepository extends CrudRepository<Epd, String> {

	@Override
    Optional<Epd> findById(String id);

    @Override
    void delete(Epd deleted);
    
}