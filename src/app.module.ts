import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PlansModule } from './plans/plans.module';


@Module({
  imports: [UsersModule, ProfilesModule, PlansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
