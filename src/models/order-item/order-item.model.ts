import { ApiModelProperty } from '@nestjs/swagger';

export class OrderItemModel {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    amount: number;
    @ApiModelProperty()
    currency: string;
    @ApiModelProperty()
    pritingEditionId: string;
    @ApiModelProperty()
    orderId: string;
}
