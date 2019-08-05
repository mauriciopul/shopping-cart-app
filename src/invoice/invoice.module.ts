import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { invoiceSchema } from './schemas/invoice.schemas';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Invoice', schema: invoiceSchema}])],
    controllers: [InvoiceController],
    providers: [InvoiceService]
})
export class InvoiceModule {}
