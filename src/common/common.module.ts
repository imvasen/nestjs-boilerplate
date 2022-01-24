import { CacheModule, Module } from '@nestjs/common';

import { cache } from '@/common/config';

@Module({
  imports: [CacheModule.register(cache)],
})
export class CommonModule {}
