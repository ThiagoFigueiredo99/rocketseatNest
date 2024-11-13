import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { Env } from './env'

@Injectable()
export class EnvService {
  constructor(private ConfigService: ConfigService<Env, true>) {}

  get<T extends keyof Env>(key: T) {
    return this.ConfigService.get<T>(key, { infer: true })
  }
}
