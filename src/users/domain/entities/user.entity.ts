export type UserProps = {
   name: string;
   email: string;
   password: string;
   createAt?: Date;
};

export class UserEntity {
   constructor(public readonly props: UserProps) {
      this.props.createAt = this.props.createAt ?? new Date();
   }

   get name(): string {
      return this.props.name;
   }

   get email(): string {
      return this.props.email;
   }

   get password(): string {
      return this.props.password;
   }

   get createAt(): Date {
      return this.props.createAt;
   }
}
