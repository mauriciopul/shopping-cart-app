import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraSchema } from './schemas/compra.schemas';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';

@Module({
imports: [MongooseModule.forFeature([{name: 'Compra', schema: CompraSchema}])],
controllers:[ComprasController],
providers:[ComprasService]

})
export class ComprasModule {}
