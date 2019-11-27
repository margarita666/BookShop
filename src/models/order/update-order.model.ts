import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateOrderModel {
    @ApiModelProperty()
    id: string;
    @ApiModelProperty()
    description: string;
    @ApiModelProperty()
    userId: string;
    @ApiModelProperty({
        example: new Date(Date.now()),
        type: String,
        required: true,
    })
    date: Date;
    @ApiModelProperty()
    paymentId: string;
}
