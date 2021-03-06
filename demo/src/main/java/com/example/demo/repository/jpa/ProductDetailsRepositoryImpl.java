package com.example.demo.repository.jpa;

import com.example.demo.model.Product;
import com.example.demo.model.ProductDetails;
import com.example.demo.repository.ProductDetailsRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class ProductDetailsRepositoryImpl implements ProductDetailsRepository {

    private final JpaProductDetailsRepository repository;

    public ProductDetailsRepositoryImpl(JpaProductDetailsRepository repository) {
        this.repository = repository;
    }

    @Override
    public ProductDetails save(String display, String graphicsCard, String internalMemory, String memory, String processor, String resolution, Product product) {
        ProductDetails details = new ProductDetails(display, graphicsCard, internalMemory, memory, processor, resolution, product);
//        return this.repository.save(details);
        try {
            return this.repository.saveAndFlush(details);
        } catch (DataIntegrityViolationException e) {
            System.out.println("Duplicate found, skipping");
        }
        return  details;
    }

    @Override
    public Optional<ProductDetails> findById(Long productId) {
        return this.repository.findById(productId);
    }

    @Override
    public void deleteById(Long productId) {
        this.repository.deleteById(productId);
    }

    @Override
    public ProductDetails findByProductId(Long id) {
        return this.repository.findByProductId(id);
    }

    @Override
    public List<ProductDetails> findByProductUrlContains(String store) {
        List<ProductDetails> list = new ArrayList<>();
        for (ProductDetails productDetails:this.repository.findAll()){
            if(productDetails.getProduct().getUrl().contains(store))
                list.add(productDetails);
        }
        return list;
    }

    @Override
    public List<ProductDetails> searchProducts(String display, String graphicsCard, String internalMemory, String memory, String processor, String resolution) {
        return this.repository.searchProducts(display, graphicsCard, internalMemory, memory, processor, resolution);
    }


}
