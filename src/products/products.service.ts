import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  getCodYaExiste(): any {
    return 'Este codigo de producto ya existe! debes elegir otro...';
  }

  async findAll(): Promise<Product[]> {
    // this.sumarPrecios();
    return await this.productModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id);
  }
  async findOneByCod(codigoProd: string): Promise<Product> {
    console.log(this.productModel, 'productModel');
    return await this.productModel
    
      .findOne({ codigoProducto: codigoProd })
      .then(product => {
        return product;
      })
      .catch(error => {
        return error;
      });
  }
  async delete(id: string): Promise<Product> {
    const deleteProduct = await this.productModel.findById(id);
    return await deleteProduct.remove();
  }
  //   async delete(id: string): Promise<Product> {
  //     return await this.productModel.findByIdAndDelete(id);
  //   }

  // async create(createProductDto: CreateProductDto): Promise<Product> {

  //     const createProduct = await new this.productModel(createProductDto);
  //     var codDto: string = createProduct.codigoProducto;//Recibe el codigoProducto enviado por POST

  //     var sw = false;
  //     var codRecibe: any = await this.productModel.findOne({ "codigoProducto": "333sdeee43" });

  //     console.log(`codDto: ${codDto}`);
  //     console.log(`codRecibe ${codRecibe}`);
  //     return;

  //     // // codRecibe.filter(function (recibe) {
  //     // //     var tem = recibe.codigoProducto;
  //     //  //   if (codRecibe) sw = true;
  //     // // });

  //     // if (codRecibe) {
  //     //     return await createProduct.save();
  //     // } else {
  //     //     return await this.getCodYaExiste();
  //     // };
  // };

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

  //funcion crear funcional pero con codigo largo
  async create(createProductDto: CreateProductDto): Promise<Product> {
    if (
      (await this.productModel.find({
        codigoProducto: createProductDto.codigoProducto,
      })) === null
    ) {
      return await this.getCodYaExiste();
    } else {
      return await new this.productModel(createProductDto).save();
    }
  }

  async update(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const updateProduct = await this.findOne(id);
    return await updateProduct.update(createProductDto);
  }

  // async sumarPrecios() {
  //     var sumPre = 0;
  //     let precio: any[] = await this.productModel.find();
  //     precio.filter(function (pr) {
  //         sumPre += pr.precioProducto;
  //     });
  //     console.log(`suma: ${sumPre}`);
  //     return await sumPre;
  // };
}
