const RC = require('rc')('CLEDG', require('../../config/default.json'))

module.exports = {
  HOSTNAME: RC.HOSTNAME.replace(/\/$/, ''),
  PORT: RC.PORT,
  MONGODB_URI: RC.MONGODB.URI,
  MONGODB_DEBUG: (RC.MONGODB.DEBUG === true || RC.MONGODB.DEBUG === 'true'),
  MONGODB_DISABLED: RC.MONGODB.DISABLED,
  AMOUNT: RC.AMOUNT,
  EXPIRES_TIMEOUT: RC.EXPIRES_TIMEOUT,
  ERROR_HANDLING: RC.ERROR_HANDLING,
  HANDLERS: RC.HANDLERS,
  HANDLERS_DISABLED: RC.HANDLERS.DISABLED,
  HANDLERS_API: RC.HANDLERS.API,
  HANDLERS_API_DISABLED: RC.HANDLERS.API.DISABLED,
  HANDLERS_TIMEOUT: RC.HANDLERS.TIMEOUT,
  HANDLERS_TIMEOUT_DISABLED: RC.HANDLERS.TIMEOUT.DISABLED,
  HANDLERS_TIMEOUT_TIMEXP: RC.HANDLERS.TIMEOUT.TIMEXP,
  HANDLERS_TIMEOUT_TIMEZONE: RC.HANDLERS.TIMEOUT.TIMEZONE,
  CACHE_CONFIG: RC.CACHE,
  KAFKA_CONFIG: RC.KAFKA,
  PARTICIPANT_INITIAL_POSITION: RC.PARTICIPANT_INITIAL_POSITION,
  RUN_MIGRATIONS: !RC.MIGRATIONS.DISABLED,
  RUN_DATA_MIGRATIONS: RC.MIGRATIONS.RUN_DATA_MIGRATIONS,
  INTERNAL_TRANSFER_VALIDITY_SECONDS: RC.INTERNAL_TRANSFER_VALIDITY_SECONDS,
  ENABLE_ON_US_TRANSFERS: RC.ENABLE_ON_US_TRANSFERS,
  HUB_ID: RC.HUB_PARTICIPANT.ID,
  HUB_NAME: RC.HUB_PARTICIPANT.NAME,
  HUB_ACCOUNTS: RC.HUB_PARTICIPANT.ACCOUNTS,
  INSTRUMENTATION_METRICS_DISABLED: RC.INSTRUMENTATION.METRICS.DISABLED,
  INSTRUMENTATION_METRICS_LABELS: RC.INSTRUMENTATION.METRICS.labels,
  INSTRUMENTATION_METRICS_CONFIG: RC.INSTRUMENTATION.METRICS.config,
  DATABASE: {
    client: RC.DATABASE.DIALECT,
    connection: {
      host: RC.DATABASE.HOST.replace(/\/$/, ''),
      port: RC.DATABASE.PORT,
      user: RC.DATABASE.USER,
      password: RC.DATABASE.PASSWORD,
      database: RC.DATABASE.SCHEMA
    },
    pool: {
      // minimum size
      min: RC.DATABASE.POOL_MIN_SIZE,
      // maximum size
      max: RC.DATABASE.POOL_MAX_SIZE,
      // acquire promises are rejected after this many milliseconds
      // if a resource cannot be acquired
      acquireTimeoutMillis: RC.DATABASE.ACQUIRE_TIMEOUT_MILLIS,
      // create operations are cancelled after this many milliseconds
      // if a resource cannot be acquired
      createTimeoutMillis: RC.DATABASE.CREATE_TIMEOUT_MILLIS,
      // destroy operations are awaited for at most this many milliseconds
      // new resources will be created after this timeout
      destroyTimeoutMillis: RC.DATABASE.DESTROY_TIMEOUT_MILLIS,
      // free resouces are destroyed after this many milliseconds
      idleTimeoutMillis: RC.DATABASE.IDLE_TIMEOUT_MILLIS,
      // how often to check for idle resources to destroy
      reapIntervalMillis: RC.DATABASE.REAP_INTERVAL_MILLIS,
      // long long to idle after failed create before trying again
      createRetryIntervalMillis: RC.DATABASE.CREATE_RETRY_INTERVAL_MILLIS
      // ping: function (conn, cb) { conn.query('SELECT 1', cb) }
    },
    debug: RC.DATABASE.DEBUG
  },
  API_DOC_ENDPOINTS_ENABLED: RC.API_DOC_ENDPOINTS_ENABLED || false,
  SETTLEMENT_MODELS: RC.SETTLEMENT_MODELS
}
