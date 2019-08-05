import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceDetailSchema } from './schemas/invoicedetail.schemas';
import { InvoicedetailsController } from './invoicesdetails.controller';
import { InvoicesdetailsService } from './invoicesdetails.service';

@Module({

    imports: [MongooseModule.forFeature([{ name: 'InvoiceDetail', schema: InvoiceDetailSchema }])],
    controllers: [InvoicedetailsController],
    providers: [InvoicesdetailsService]

})
export class InvoicesdetailsModule { }
