type SuccessResponse<T> = {
  status: number;
  success: true;
  data: T;
  message?: string;
};

type ErrorResponse = {
  status: number;
  success: false;
  error: unknown;
  message?: string;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse 

export function ok<T>(data:T,message?:string): SuccessResponse<T>{
    return{
        status:200,
        success:true,
        data,
        message

    }
}

export function failed(status:number,error: unknown,message: string) : ErrorResponse{
    return{
        status,
        success:false,
        error,
        message

    }
}
