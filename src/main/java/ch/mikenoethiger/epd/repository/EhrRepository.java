package ch.mikenoethiger.epd.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import ch.mikenoethiger.epd.model.Ehr;

public interface EhrRepository extends CrudRepository<Ehr, String> {

	@Override
    Optional<Ehr> findById(String id);

    @Override
    void delete(Ehr deleted);
    
}