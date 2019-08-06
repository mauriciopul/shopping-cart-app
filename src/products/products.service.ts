import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    getCodYaExiste(): any {
        return 'Este codigo de producto ya existe! debes elegir otro...';
    };

    async findAll(): Promise<Product[]> {
        // this.sumarPrecios();
        return await this.productModel.find();
    };

    async findOne(id: string): Promise<Product> {
        return await this.productModel.findById(id);
    };

    async delete(id: string): Promise<Product> {
        const deleteProduct = await this.productModel.findById(id);
        return await deleteProduct.remove();
    };

    // async create(createProductDto: CreateProductDto): Promise<Product> {

    //     const createProduct = await new this.productModel(createProductDto);
    //     var codDto = createProduct.codigoProducto;

    //     var sw = false;
    //     var codRecibe: any = await this.productModel.findOne();

    //     this.productModel.findOne({ codigoProducto: codRecibe }).toArray

    //     codRecibe.filter(function (recibe) {
    //         var tem = recibe.codigoProducto;
    //         if (tem == codDto) sw = true;
    //     });

    //     if (sw == false) {
    //         const a = await createProduct.save();
    //         // await this.sumarPrecios();
    //         return a;
    //     } else {
    //         return await this.getCodYaExiste();
    //     };
    // };


    async create(createProductDto: CreateProductDto): Promise<Product> {

        const createProduct = await new this.productModel(createProductDto);
        var codDto = createProduct.codigoProducto;

        var sw = false;
        var codRecibe: any[] = await this.productModel.find();

        codRecibe.filter(function (recibe) {
            var tem = recibe.codigoProducto;
            if (tem == codDto) sw = true;
        });

        if (sw == false) {
           const a = await createProduct.save();           
           return a;
        } else {
           return await this.getCodYaExiste();
        };
    };

    async update(id: string, createProductDto: CreateProductDto): Promise<Product> {
        const updateProduct = await this.findOne(id);
        return await updateProduct.update(createProductDto);
    };

    // async sumarPrecios() {
    //     var sumPre = 0;
    //     let precio: any[] = await this.productModel.find();
    //     precio.filter(function (pr) {
    //         sumPre += pr.precioProducto;
    //     });
    //     console.log(`suma: ${sumPre}`);
    //     return await sumPre;
    // };


};
