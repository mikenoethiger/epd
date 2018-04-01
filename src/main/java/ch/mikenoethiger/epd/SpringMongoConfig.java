package ch.mikenoethiger.epd;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

import com.mongodb.MongoClient;

@Configuration
public class SpringMongoConfig extends AbstractMongoConfiguration{
	
	@Bean
	public GridFsTemplate gridFsTemplate() throws Exception {
		return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
	}

	@Override
	protected String getDatabaseName() {
		return "epd_db";
	}

	@Override
	public MongoClient mongoClient() {
		return new MongoClient("localhost", 27017);
	}

}
