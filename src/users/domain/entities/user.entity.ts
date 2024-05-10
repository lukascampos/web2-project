import { Entity } from '@/shared/domain/entities/entity';

export type UserProps = {
   name: string;
   email: string;
   password: string;
   createAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
   constructor(
      public readonly props: UserProps,
      id?: string,
   ) {
      super(props, id);
      this.props.createAt = this.props.createAt ?? new Date();
   }

   get name(): string {
      return this.props.name;
   }

   private set name(value: string) {
      this.props.name = value;
   }

   get email(): string {
      return this.props.email;
   }

   get password(): string {
      return this.props.password;
   }

   private set password(value: string) {
      this.props.password = value;
   }

   get createAt(): Date {
      return this.props.createAt;
   }

   updateName(value: string): void {
      this.name = value;
   }

   updatePassword(value: string): void {
      this.password = value;
   }
}
