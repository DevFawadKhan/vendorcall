
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model ServiceCategory
 * 
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServicePricingTier
 * 
 */
export type ServicePricingTier = $Result.DefaultSelection<Prisma.$ServicePricingTierPayload>
/**
 * Model ServiceProvider
 * 
 */
export type ServiceProvider = $Result.DefaultSelection<Prisma.$ServiceProviderPayload>
/**
 * Model ProviderService
 * 
 */
export type ProviderService = $Result.DefaultSelection<Prisma.$ProviderServicePayload>
/**
 * Model ProviderAvailability
 * 
 */
export type ProviderAvailability = $Result.DefaultSelection<Prisma.$ProviderAvailabilityPayload>
/**
 * Model ProviderDocument
 * 
 */
export type ProviderDocument = $Result.DefaultSelection<Prisma.$ProviderDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  customer: 'customer',
  provider: 'provider',
  admin: 'admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other',
  prefer_not_to_say: 'prefer_not_to_say'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const DocumentType: {
  LICENSE: 'LICENSE',
  CERTIFICATION: 'CERTIFICATION',
  INSURANCE: 'INSURANCE',
  ID_PROOF: 'ID_PROOF',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const BookingStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  assigned: 'assigned',
  dispatched: 'dispatched',
  in_progress: 'in_progress',
  completed: 'completed',
  cancelled: 'cancelled',
  refunded: 'refunded'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  pending: 'pending',
  paid: 'paid',
  failed: 'failed',
  refunded: 'refunded'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  credit_card: 'credit_card',
  debit_card: 'debit_card',
  paypal: 'paypal',
  apple_pay: 'apple_pay',
  google_pay: 'google_pay',
  cash: 'cash'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const VerificationStatus: {
  pending: 'pending',
  verified: 'verified',
  rejected: 'rejected'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const AddressType: {
  home: 'home',
  work: 'work',
  other: 'other'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCategories
    * const serviceCategories = await prisma.serviceCategory.findMany()
    * ```
    */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePricingTier`: Exposes CRUD operations for the **ServicePricingTier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePricingTiers
    * const servicePricingTiers = await prisma.servicePricingTier.findMany()
    * ```
    */
  get servicePricingTier(): Prisma.ServicePricingTierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceProvider`: Exposes CRUD operations for the **ServiceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProviders
    * const serviceProviders = await prisma.serviceProvider.findMany()
    * ```
    */
  get serviceProvider(): Prisma.ServiceProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerService`: Exposes CRUD operations for the **ProviderService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderServices
    * const providerServices = await prisma.providerService.findMany()
    * ```
    */
  get providerService(): Prisma.ProviderServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerAvailability`: Exposes CRUD operations for the **ProviderAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderAvailabilities
    * const providerAvailabilities = await prisma.providerAvailability.findMany()
    * ```
    */
  get providerAvailability(): Prisma.ProviderAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerDocument`: Exposes CRUD operations for the **ProviderDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderDocuments
    * const providerDocuments = await prisma.providerDocument.findMany()
    * ```
    */
  get providerDocument(): Prisma.ProviderDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    PasswordResetToken: 'PasswordResetToken',
    EmailVerificationToken: 'EmailVerificationToken',
    ServiceCategory: 'ServiceCategory',
    Service: 'Service',
    ServicePricingTier: 'ServicePricingTier',
    ServiceProvider: 'ServiceProvider',
    ProviderService: 'ProviderService',
    ProviderAvailability: 'ProviderAvailability',
    ProviderDocument: 'ProviderDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "passwordResetToken" | "emailVerificationToken" | "serviceCategory" | "service" | "servicePricingTier" | "serviceProvider" | "providerService" | "providerAvailability" | "providerDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>
        fields: Prisma.ServiceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCategory>
          }
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServicePricingTier: {
        payload: Prisma.$ServicePricingTierPayload<ExtArgs>
        fields: Prisma.ServicePricingTierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePricingTierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePricingTierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          findFirst: {
            args: Prisma.ServicePricingTierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePricingTierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          findMany: {
            args: Prisma.ServicePricingTierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>[]
          }
          create: {
            args: Prisma.ServicePricingTierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          createMany: {
            args: Prisma.ServicePricingTierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicePricingTierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>[]
          }
          delete: {
            args: Prisma.ServicePricingTierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          update: {
            args: Prisma.ServicePricingTierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          deleteMany: {
            args: Prisma.ServicePricingTierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePricingTierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicePricingTierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>[]
          }
          upsert: {
            args: Prisma.ServicePricingTierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePricingTierPayload>
          }
          aggregate: {
            args: Prisma.ServicePricingTierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePricingTier>
          }
          groupBy: {
            args: Prisma.ServicePricingTierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePricingTierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePricingTierCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePricingTierCountAggregateOutputType> | number
          }
        }
      }
      ServiceProvider: {
        payload: Prisma.$ServiceProviderPayload<ExtArgs>
        fields: Prisma.ServiceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findFirst: {
            args: Prisma.ServiceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findMany: {
            args: Prisma.ServiceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          create: {
            args: Prisma.ServiceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          createMany: {
            args: Prisma.ServiceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          delete: {
            args: Prisma.ServiceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          update: {
            args: Prisma.ServiceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          aggregate: {
            args: Prisma.ServiceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceProvider>
          }
          groupBy: {
            args: Prisma.ServiceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderCountAggregateOutputType> | number
          }
        }
      }
      ProviderService: {
        payload: Prisma.$ProviderServicePayload<ExtArgs>
        fields: Prisma.ProviderServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          findFirst: {
            args: Prisma.ProviderServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          findMany: {
            args: Prisma.ProviderServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          create: {
            args: Prisma.ProviderServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          createMany: {
            args: Prisma.ProviderServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          delete: {
            args: Prisma.ProviderServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          update: {
            args: Prisma.ProviderServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          deleteMany: {
            args: Prisma.ProviderServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          upsert: {
            args: Prisma.ProviderServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          aggregate: {
            args: Prisma.ProviderServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderService>
          }
          groupBy: {
            args: Prisma.ProviderServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderServiceCountAggregateOutputType> | number
          }
        }
      }
      ProviderAvailability: {
        payload: Prisma.$ProviderAvailabilityPayload<ExtArgs>
        fields: Prisma.ProviderAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.ProviderAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          findMany: {
            args: Prisma.ProviderAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>[]
          }
          create: {
            args: Prisma.ProviderAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          createMany: {
            args: Prisma.ProviderAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.ProviderAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          update: {
            args: Prisma.ProviderAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.ProviderAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.ProviderAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.ProviderAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderAvailability>
          }
          groupBy: {
            args: Prisma.ProviderAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      ProviderDocument: {
        payload: Prisma.$ProviderDocumentPayload<ExtArgs>
        fields: Prisma.ProviderDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          findFirst: {
            args: Prisma.ProviderDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          findMany: {
            args: Prisma.ProviderDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>[]
          }
          create: {
            args: Prisma.ProviderDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          createMany: {
            args: Prisma.ProviderDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>[]
          }
          delete: {
            args: Prisma.ProviderDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          update: {
            args: Prisma.ProviderDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ProviderDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDocumentPayload>
          }
          aggregate: {
            args: Prisma.ProviderDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderDocument>
          }
          groupBy: {
            args: Prisma.ProviderDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    passwordResetToken?: PasswordResetTokenOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    serviceCategory?: ServiceCategoryOmit
    service?: ServiceOmit
    servicePricingTier?: ServicePricingTierOmit
    serviceProvider?: ServiceProviderOmit
    providerService?: ProviderServiceOmit
    providerAvailability?: ProviderAvailabilityOmit
    providerDocument?: ProviderDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emailVerificationTokens: number
    passwordResetTokens: number
    verifiedDocuments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailVerificationTokens?: boolean | UserCountOutputTypeCountEmailVerificationTokensArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
    verifiedDocuments?: boolean | UserCountOutputTypeCountVerifiedDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderDocumentWhereInput
  }


  /**
   * Count Type ServiceCategoryCountOutputType
   */

  export type ServiceCategoryCountOutputType = {
    subCategories: number
    services: number
  }

  export type ServiceCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | ServiceCategoryCountOutputTypeCountSubCategoriesArgs
    services?: boolean | ServiceCategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategoryCountOutputType
     */
    select?: ServiceCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
  }

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    pricingTiers: number
    providerServices: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingTiers?: boolean | ServiceCountOutputTypeCountPricingTiersArgs
    providerServices?: boolean | ServiceCountOutputTypeCountProviderServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPricingTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePricingTierWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
  }


  /**
   * Count Type ServiceProviderCountOutputType
   */

  export type ServiceProviderCountOutputType = {
    providerServices: number
    availabilities: number
    documents: number
  }

  export type ServiceProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | ServiceProviderCountOutputTypeCountProviderServicesArgs
    availabilities?: boolean | ServiceProviderCountOutputTypeCountAvailabilitiesArgs
    documents?: boolean | ServiceProviderCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProviderCountOutputType
     */
    select?: ServiceProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderAvailabilityWhereInput
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    userType: $Enums.UserType | null
    avatarUrl: string | null
    isVerified: boolean | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    userType: $Enums.UserType | null
    avatarUrl: string | null
    isVerified: boolean | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    passwordHash: number
    firstName: number
    lastName: number
    userType: number
    avatarUrl: number
    isVerified: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    metadata: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    userType?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    userType?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    userType?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    metadata?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    phone: string | null
    passwordHash: string
    firstName: string | null
    lastName: string | null
    userType: $Enums.UserType
    avatarUrl: string | null
    isVerified: boolean
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    metadata: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    userType?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    serviceProvider?: boolean | User$serviceProviderArgs<ExtArgs>
    verifiedDocuments?: boolean | User$verifiedDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    userType?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    userType?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    userType?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metadata?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "passwordHash" | "firstName" | "lastName" | "userType" | "avatarUrl" | "isVerified" | "isActive" | "lastLogin" | "createdAt" | "updatedAt" | "metadata", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    emailVerificationTokens?: boolean | User$emailVerificationTokensArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    serviceProvider?: boolean | User$serviceProviderArgs<ExtArgs>
    verifiedDocuments?: boolean | User$verifiedDocumentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      emailVerificationTokens: Prisma.$EmailVerificationTokenPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
      serviceProvider: Prisma.$ServiceProviderPayload<ExtArgs> | null
      verifiedDocuments: Prisma.$ProviderDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      phone: string | null
      passwordHash: string
      firstName: string | null
      lastName: string | null
      userType: $Enums.UserType
      avatarUrl: string | null
      isVerified: boolean
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emailVerificationTokens<T extends User$emailVerificationTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceProvider<T extends User$serviceProviderArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceProviderArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verifiedDocuments<T extends User$verifiedDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly metadata: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.emailVerificationTokens
   */
  export type User$emailVerificationTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    cursor?: EmailVerificationTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User.serviceProvider
   */
  export type User$serviceProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    where?: ServiceProviderWhereInput
  }

  /**
   * User.verifiedDocuments
   */
  export type User$verifiedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    where?: ProviderDocumentWhereInput
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    cursor?: ProviderDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderDocumentScalarFieldEnum | ProviderDocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    userId: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: number | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    dateOfBirth: number
    gender: number
    bio: number
    languages: number
    notificationPreferences: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    userId?: true
  }

  export type UserProfileSumAggregateInputType = {
    userId?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    gender?: true
    bio?: true
    languages?: true
    notificationPreferences?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: number
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bio: string | null
    languages: string[]
    notificationPreferences: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bio?: boolean
    languages?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bio?: boolean
    languages?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bio?: boolean
    languages?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bio?: boolean
    languages?: boolean
    notificationPreferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateOfBirth" | "gender" | "bio" | "languages" | "notificationPreferences" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      dateOfBirth: Date | null
      gender: $Enums.Gender | null
      bio: string | null
      languages: string[]
      notificationPreferences: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'Int'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly gender: FieldRef<"UserProfile", 'Gender'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly languages: FieldRef<"UserProfile", 'String[]'>
    readonly notificationPreferences: FieldRef<"UserProfile", 'Json'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    userId: number
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'Int'>
    readonly userId: FieldRef<"PasswordResetToken", 'Int'>
    readonly otp: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    userId: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _avg?: EmailVerificationTokenAvgAggregateInputType
    _sum?: EmailVerificationTokenSumAggregateInputType
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: number
    userId: number
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _avg: EmailVerificationTokenAvgAggregateOutputType | null
    _sum: EmailVerificationTokenSumAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'Int'>
    readonly userId: FieldRef<"EmailVerificationToken", 'Int'>
    readonly otp: FieldRef<"EmailVerificationToken", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  export type ServiceCategoryAvgAggregateOutputType = {
    id: number | null
    parentCategoryId: number | null
    sortOrder: number | null
  }

  export type ServiceCategorySumAggregateOutputType = {
    id: number | null
    parentCategoryId: number | null
    sortOrder: number | null
  }

  export type ServiceCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    iconUrl: string | null
    parentCategoryId: number | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    iconUrl: string | null
    parentCategoryId: number | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    iconUrl: number
    parentCategoryId: number
    sortOrder: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ServiceCategoryAvgAggregateInputType = {
    id?: true
    parentCategoryId?: true
    sortOrder?: true
  }

  export type ServiceCategorySumAggregateInputType = {
    id?: true
    parentCategoryId?: true
    sortOrder?: true
  }

  export type ServiceCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    parentCategoryId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    parentCategoryId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    iconUrl?: true
    parentCategoryId?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCategories
    **/
    _count?: true | ServiceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>
  }




  export type ServiceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithAggregationInput | ServiceCategoryOrderByWithAggregationInput[]
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum
    having?: ServiceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCategoryCountAggregateInputType | true
    _avg?: ServiceCategoryAvgAggregateInputType
    _sum?: ServiceCategorySumAggregateInputType
    _min?: ServiceCategoryMinAggregateInputType
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type ServiceCategoryGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    iconUrl: string | null
    parentCategoryId: number | null
    sortOrder: number
    isActive: boolean
    createdAt: Date
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    parentCategoryId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
    subCategories?: boolean | ServiceCategory$subCategoriesArgs<ExtArgs>
    services?: boolean | ServiceCategory$servicesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    parentCategoryId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    parentCategoryId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    iconUrl?: boolean
    parentCategoryId?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ServiceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "iconUrl" | "parentCategoryId" | "sortOrder" | "isActive" | "createdAt", ExtArgs["result"]["serviceCategory"]>
  export type ServiceCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
    subCategories?: boolean | ServiceCategory$subCategoriesArgs<ExtArgs>
    services?: boolean | ServiceCategory$servicesArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
  }
  export type ServiceCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | ServiceCategory$parentCategoryArgs<ExtArgs>
  }

  export type $ServiceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCategory"
    objects: {
      parentCategory: Prisma.$ServiceCategoryPayload<ExtArgs> | null
      subCategories: Prisma.$ServiceCategoryPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      iconUrl: string | null
      parentCategoryId: number | null
      sortOrder: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["serviceCategory"]>
    composites: {}
  }

  type ServiceCategoryGetPayload<S extends boolean | null | undefined | ServiceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>

  type ServiceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCategoryCountAggregateInputType | true
    }

  export interface ServiceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'], meta: { name: 'ServiceCategory' } }
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     * 
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCategoryFindManyArgs>(args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     * 
     */
    create<T extends ServiceCategoryCreateArgs>(args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCategories and returns the data saved in the database.
     * @param {ServiceCategoryCreateManyAndReturnArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     * 
     */
    delete<T extends ServiceCategoryDeleteArgs>(args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCategoryUpdateArgs>(args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories and returns the data updated in the database.
     * @param {ServiceCategoryUpdateManyAndReturnArgs} args - Arguments to update many ServiceCategories.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
    **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceCategoryAggregateArgs>(args: Subset<T, ServiceCategoryAggregateArgs>): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCategory model
   */
  readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentCategory<T extends ServiceCategory$parentCategoryArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$parentCategoryArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subCategories<T extends ServiceCategory$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends ServiceCategory$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<"ServiceCategory", 'Int'>
    readonly name: FieldRef<"ServiceCategory", 'String'>
    readonly slug: FieldRef<"ServiceCategory", 'String'>
    readonly description: FieldRef<"ServiceCategory", 'String'>
    readonly iconUrl: FieldRef<"ServiceCategory", 'String'>
    readonly parentCategoryId: FieldRef<"ServiceCategory", 'Int'>
    readonly sortOrder: FieldRef<"ServiceCategory", 'Int'>
    readonly isActive: FieldRef<"ServiceCategory", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
  }

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory createManyAndReturn
   */
  export type ServiceCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory updateManyAndReturn
   */
  export type ServiceCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
  }

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to delete.
     */
    limit?: number
  }

  /**
   * ServiceCategory.parentCategory
   */
  export type ServiceCategory$parentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    where?: ServiceCategoryWhereInput
  }

  /**
   * ServiceCategory.subCategories
   */
  export type ServiceCategory$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    cursor?: ServiceCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory.services
   */
  export type ServiceCategory$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    basePrice: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    basePrice: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    basePrice: Decimal | null
    durationMinutes: number | null
    requirements: string | null
    isPopular: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    basePrice: Decimal | null
    durationMinutes: number | null
    requirements: string | null
    isPopular: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    slug: number
    description: number
    basePrice: number
    durationMinutes: number
    imageUrls: number
    requirements: number
    isPopular: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    categoryId?: true
    basePrice?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    categoryId?: true
    basePrice?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    basePrice?: true
    durationMinutes?: true
    requirements?: true
    isPopular?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    basePrice?: true
    durationMinutes?: true
    requirements?: true
    isPopular?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    basePrice?: true
    durationMinutes?: true
    imageUrls?: true
    requirements?: true
    isPopular?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    categoryId: number
    name: string
    slug: string
    description: string | null
    basePrice: Decimal
    durationMinutes: number | null
    imageUrls: string[]
    requirements: string | null
    isPopular: boolean
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    basePrice?: boolean
    durationMinutes?: boolean
    imageUrls?: boolean
    requirements?: boolean
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
    pricingTiers?: boolean | Service$pricingTiersArgs<ExtArgs>
    providerServices?: boolean | Service$providerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    basePrice?: boolean
    durationMinutes?: boolean
    imageUrls?: boolean
    requirements?: boolean
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    basePrice?: boolean
    durationMinutes?: boolean
    imageUrls?: boolean
    requirements?: boolean
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    basePrice?: boolean
    durationMinutes?: boolean
    imageUrls?: boolean
    requirements?: boolean
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "description" | "basePrice" | "durationMinutes" | "imageUrls" | "requirements" | "isPopular" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
    pricingTiers?: boolean | Service$pricingTiersArgs<ExtArgs>
    providerServices?: boolean | Service$providerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      category: Prisma.$ServiceCategoryPayload<ExtArgs>
      pricingTiers: Prisma.$ServicePricingTierPayload<ExtArgs>[]
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      name: string
      slug: string
      description: string | null
      basePrice: Prisma.Decimal
      durationMinutes: number | null
      imageUrls: string[]
      requirements: string | null
      isPopular: boolean
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ServiceCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategoryDefaultArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pricingTiers<T extends Service$pricingTiersArgs<ExtArgs> = {}>(args?: Subset<T, Service$pricingTiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    providerServices<T extends Service$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly categoryId: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly slug: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly basePrice: FieldRef<"Service", 'Decimal'>
    readonly durationMinutes: FieldRef<"Service", 'Int'>
    readonly imageUrls: FieldRef<"Service", 'String[]'>
    readonly requirements: FieldRef<"Service", 'String'>
    readonly isPopular: FieldRef<"Service", 'Boolean'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly sortOrder: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.pricingTiers
   */
  export type Service$pricingTiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    where?: ServicePricingTierWhereInput
    orderBy?: ServicePricingTierOrderByWithRelationInput | ServicePricingTierOrderByWithRelationInput[]
    cursor?: ServicePricingTierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePricingTierScalarFieldEnum | ServicePricingTierScalarFieldEnum[]
  }

  /**
   * Service.providerServices
   */
  export type Service$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    cursor?: ProviderServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServicePricingTier
   */

  export type AggregateServicePricingTier = {
    _count: ServicePricingTierCountAggregateOutputType | null
    _avg: ServicePricingTierAvgAggregateOutputType | null
    _sum: ServicePricingTierSumAggregateOutputType | null
    _min: ServicePricingTierMinAggregateOutputType | null
    _max: ServicePricingTierMaxAggregateOutputType | null
  }

  export type ServicePricingTierAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    price: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServicePricingTierSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    price: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
  }

  export type ServicePricingTierMinAggregateOutputType = {
    id: number | null
    serviceId: number | null
    tierName: string | null
    description: string | null
    price: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ServicePricingTierMaxAggregateOutputType = {
    id: number | null
    serviceId: number | null
    tierName: string | null
    description: string | null
    price: Decimal | null
    durationMinutes: number | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ServicePricingTierCountAggregateOutputType = {
    id: number
    serviceId: number
    tierName: number
    description: number
    price: number
    durationMinutes: number
    includes: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ServicePricingTierAvgAggregateInputType = {
    id?: true
    serviceId?: true
    price?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServicePricingTierSumAggregateInputType = {
    id?: true
    serviceId?: true
    price?: true
    durationMinutes?: true
    sortOrder?: true
  }

  export type ServicePricingTierMinAggregateInputType = {
    id?: true
    serviceId?: true
    tierName?: true
    description?: true
    price?: true
    durationMinutes?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ServicePricingTierMaxAggregateInputType = {
    id?: true
    serviceId?: true
    tierName?: true
    description?: true
    price?: true
    durationMinutes?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ServicePricingTierCountAggregateInputType = {
    id?: true
    serviceId?: true
    tierName?: true
    description?: true
    price?: true
    durationMinutes?: true
    includes?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ServicePricingTierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePricingTier to aggregate.
     */
    where?: ServicePricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePricingTiers to fetch.
     */
    orderBy?: ServicePricingTierOrderByWithRelationInput | ServicePricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePricingTiers
    **/
    _count?: true | ServicePricingTierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicePricingTierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicePricingTierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePricingTierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePricingTierMaxAggregateInputType
  }

  export type GetServicePricingTierAggregateType<T extends ServicePricingTierAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePricingTier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePricingTier[P]>
      : GetScalarType<T[P], AggregateServicePricingTier[P]>
  }




  export type ServicePricingTierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePricingTierWhereInput
    orderBy?: ServicePricingTierOrderByWithAggregationInput | ServicePricingTierOrderByWithAggregationInput[]
    by: ServicePricingTierScalarFieldEnum[] | ServicePricingTierScalarFieldEnum
    having?: ServicePricingTierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePricingTierCountAggregateInputType | true
    _avg?: ServicePricingTierAvgAggregateInputType
    _sum?: ServicePricingTierSumAggregateInputType
    _min?: ServicePricingTierMinAggregateInputType
    _max?: ServicePricingTierMaxAggregateInputType
  }

  export type ServicePricingTierGroupByOutputType = {
    id: number
    serviceId: number
    tierName: string
    description: string | null
    price: Decimal
    durationMinutes: number
    includes: string[]
    sortOrder: number
    createdAt: Date
    _count: ServicePricingTierCountAggregateOutputType | null
    _avg: ServicePricingTierAvgAggregateOutputType | null
    _sum: ServicePricingTierSumAggregateOutputType | null
    _min: ServicePricingTierMinAggregateOutputType | null
    _max: ServicePricingTierMaxAggregateOutputType | null
  }

  type GetServicePricingTierGroupByPayload<T extends ServicePricingTierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePricingTierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePricingTierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePricingTierGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePricingTierGroupByOutputType[P]>
        }
      >
    >


  export type ServicePricingTierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    tierName?: boolean
    description?: boolean
    price?: boolean
    durationMinutes?: boolean
    includes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePricingTier"]>

  export type ServicePricingTierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    tierName?: boolean
    description?: boolean
    price?: boolean
    durationMinutes?: boolean
    includes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePricingTier"]>

  export type ServicePricingTierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    tierName?: boolean
    description?: boolean
    price?: boolean
    durationMinutes?: boolean
    includes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePricingTier"]>

  export type ServicePricingTierSelectScalar = {
    id?: boolean
    serviceId?: boolean
    tierName?: boolean
    description?: boolean
    price?: boolean
    durationMinutes?: boolean
    includes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ServicePricingTierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "tierName" | "description" | "price" | "durationMinutes" | "includes" | "sortOrder" | "createdAt", ExtArgs["result"]["servicePricingTier"]>
  export type ServicePricingTierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePricingTierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServicePricingTierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServicePricingTierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePricingTier"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceId: number
      tierName: string
      description: string | null
      price: Prisma.Decimal
      durationMinutes: number
      includes: string[]
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["servicePricingTier"]>
    composites: {}
  }

  type ServicePricingTierGetPayload<S extends boolean | null | undefined | ServicePricingTierDefaultArgs> = $Result.GetResult<Prisma.$ServicePricingTierPayload, S>

  type ServicePricingTierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePricingTierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePricingTierCountAggregateInputType | true
    }

  export interface ServicePricingTierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePricingTier'], meta: { name: 'ServicePricingTier' } }
    /**
     * Find zero or one ServicePricingTier that matches the filter.
     * @param {ServicePricingTierFindUniqueArgs} args - Arguments to find a ServicePricingTier
     * @example
     * // Get one ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePricingTierFindUniqueArgs>(args: SelectSubset<T, ServicePricingTierFindUniqueArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePricingTier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePricingTierFindUniqueOrThrowArgs} args - Arguments to find a ServicePricingTier
     * @example
     * // Get one ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePricingTierFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePricingTierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePricingTier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierFindFirstArgs} args - Arguments to find a ServicePricingTier
     * @example
     * // Get one ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePricingTierFindFirstArgs>(args?: SelectSubset<T, ServicePricingTierFindFirstArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePricingTier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierFindFirstOrThrowArgs} args - Arguments to find a ServicePricingTier
     * @example
     * // Get one ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePricingTierFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePricingTierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePricingTiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePricingTiers
     * const servicePricingTiers = await prisma.servicePricingTier.findMany()
     * 
     * // Get first 10 ServicePricingTiers
     * const servicePricingTiers = await prisma.servicePricingTier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePricingTierWithIdOnly = await prisma.servicePricingTier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePricingTierFindManyArgs>(args?: SelectSubset<T, ServicePricingTierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePricingTier.
     * @param {ServicePricingTierCreateArgs} args - Arguments to create a ServicePricingTier.
     * @example
     * // Create one ServicePricingTier
     * const ServicePricingTier = await prisma.servicePricingTier.create({
     *   data: {
     *     // ... data to create a ServicePricingTier
     *   }
     * })
     * 
     */
    create<T extends ServicePricingTierCreateArgs>(args: SelectSubset<T, ServicePricingTierCreateArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePricingTiers.
     * @param {ServicePricingTierCreateManyArgs} args - Arguments to create many ServicePricingTiers.
     * @example
     * // Create many ServicePricingTiers
     * const servicePricingTier = await prisma.servicePricingTier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePricingTierCreateManyArgs>(args?: SelectSubset<T, ServicePricingTierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicePricingTiers and returns the data saved in the database.
     * @param {ServicePricingTierCreateManyAndReturnArgs} args - Arguments to create many ServicePricingTiers.
     * @example
     * // Create many ServicePricingTiers
     * const servicePricingTier = await prisma.servicePricingTier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicePricingTiers and only return the `id`
     * const servicePricingTierWithIdOnly = await prisma.servicePricingTier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicePricingTierCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicePricingTierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicePricingTier.
     * @param {ServicePricingTierDeleteArgs} args - Arguments to delete one ServicePricingTier.
     * @example
     * // Delete one ServicePricingTier
     * const ServicePricingTier = await prisma.servicePricingTier.delete({
     *   where: {
     *     // ... filter to delete one ServicePricingTier
     *   }
     * })
     * 
     */
    delete<T extends ServicePricingTierDeleteArgs>(args: SelectSubset<T, ServicePricingTierDeleteArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePricingTier.
     * @param {ServicePricingTierUpdateArgs} args - Arguments to update one ServicePricingTier.
     * @example
     * // Update one ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePricingTierUpdateArgs>(args: SelectSubset<T, ServicePricingTierUpdateArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePricingTiers.
     * @param {ServicePricingTierDeleteManyArgs} args - Arguments to filter ServicePricingTiers to delete.
     * @example
     * // Delete a few ServicePricingTiers
     * const { count } = await prisma.servicePricingTier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePricingTierDeleteManyArgs>(args?: SelectSubset<T, ServicePricingTierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePricingTiers
     * const servicePricingTier = await prisma.servicePricingTier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePricingTierUpdateManyArgs>(args: SelectSubset<T, ServicePricingTierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePricingTiers and returns the data updated in the database.
     * @param {ServicePricingTierUpdateManyAndReturnArgs} args - Arguments to update many ServicePricingTiers.
     * @example
     * // Update many ServicePricingTiers
     * const servicePricingTier = await prisma.servicePricingTier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicePricingTiers and only return the `id`
     * const servicePricingTierWithIdOnly = await prisma.servicePricingTier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicePricingTierUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicePricingTierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicePricingTier.
     * @param {ServicePricingTierUpsertArgs} args - Arguments to update or create a ServicePricingTier.
     * @example
     * // Update or create a ServicePricingTier
     * const servicePricingTier = await prisma.servicePricingTier.upsert({
     *   create: {
     *     // ... data to create a ServicePricingTier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePricingTier we want to update
     *   }
     * })
     */
    upsert<T extends ServicePricingTierUpsertArgs>(args: SelectSubset<T, ServicePricingTierUpsertArgs<ExtArgs>>): Prisma__ServicePricingTierClient<$Result.GetResult<Prisma.$ServicePricingTierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePricingTiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierCountArgs} args - Arguments to filter ServicePricingTiers to count.
     * @example
     * // Count the number of ServicePricingTiers
     * const count = await prisma.servicePricingTier.count({
     *   where: {
     *     // ... the filter for the ServicePricingTiers we want to count
     *   }
     * })
    **/
    count<T extends ServicePricingTierCountArgs>(
      args?: Subset<T, ServicePricingTierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePricingTierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicePricingTierAggregateArgs>(args: Subset<T, ServicePricingTierAggregateArgs>): Prisma.PrismaPromise<GetServicePricingTierAggregateType<T>>

    /**
     * Group by ServicePricingTier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePricingTierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicePricingTierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePricingTierGroupByArgs['orderBy'] }
        : { orderBy?: ServicePricingTierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicePricingTierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePricingTierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePricingTier model
   */
  readonly fields: ServicePricingTierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePricingTier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePricingTierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicePricingTier model
   */
  interface ServicePricingTierFieldRefs {
    readonly id: FieldRef<"ServicePricingTier", 'Int'>
    readonly serviceId: FieldRef<"ServicePricingTier", 'Int'>
    readonly tierName: FieldRef<"ServicePricingTier", 'String'>
    readonly description: FieldRef<"ServicePricingTier", 'String'>
    readonly price: FieldRef<"ServicePricingTier", 'Decimal'>
    readonly durationMinutes: FieldRef<"ServicePricingTier", 'Int'>
    readonly includes: FieldRef<"ServicePricingTier", 'String[]'>
    readonly sortOrder: FieldRef<"ServicePricingTier", 'Int'>
    readonly createdAt: FieldRef<"ServicePricingTier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicePricingTier findUnique
   */
  export type ServicePricingTierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter, which ServicePricingTier to fetch.
     */
    where: ServicePricingTierWhereUniqueInput
  }

  /**
   * ServicePricingTier findUniqueOrThrow
   */
  export type ServicePricingTierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter, which ServicePricingTier to fetch.
     */
    where: ServicePricingTierWhereUniqueInput
  }

  /**
   * ServicePricingTier findFirst
   */
  export type ServicePricingTierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter, which ServicePricingTier to fetch.
     */
    where?: ServicePricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePricingTiers to fetch.
     */
    orderBy?: ServicePricingTierOrderByWithRelationInput | ServicePricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePricingTiers.
     */
    cursor?: ServicePricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePricingTiers.
     */
    distinct?: ServicePricingTierScalarFieldEnum | ServicePricingTierScalarFieldEnum[]
  }

  /**
   * ServicePricingTier findFirstOrThrow
   */
  export type ServicePricingTierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter, which ServicePricingTier to fetch.
     */
    where?: ServicePricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePricingTiers to fetch.
     */
    orderBy?: ServicePricingTierOrderByWithRelationInput | ServicePricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePricingTiers.
     */
    cursor?: ServicePricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePricingTiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePricingTiers.
     */
    distinct?: ServicePricingTierScalarFieldEnum | ServicePricingTierScalarFieldEnum[]
  }

  /**
   * ServicePricingTier findMany
   */
  export type ServicePricingTierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter, which ServicePricingTiers to fetch.
     */
    where?: ServicePricingTierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePricingTiers to fetch.
     */
    orderBy?: ServicePricingTierOrderByWithRelationInput | ServicePricingTierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePricingTiers.
     */
    cursor?: ServicePricingTierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePricingTiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePricingTiers.
     */
    skip?: number
    distinct?: ServicePricingTierScalarFieldEnum | ServicePricingTierScalarFieldEnum[]
  }

  /**
   * ServicePricingTier create
   */
  export type ServicePricingTierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePricingTier.
     */
    data: XOR<ServicePricingTierCreateInput, ServicePricingTierUncheckedCreateInput>
  }

  /**
   * ServicePricingTier createMany
   */
  export type ServicePricingTierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePricingTiers.
     */
    data: ServicePricingTierCreateManyInput | ServicePricingTierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePricingTier createManyAndReturn
   */
  export type ServicePricingTierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * The data used to create many ServicePricingTiers.
     */
    data: ServicePricingTierCreateManyInput | ServicePricingTierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePricingTier update
   */
  export type ServicePricingTierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePricingTier.
     */
    data: XOR<ServicePricingTierUpdateInput, ServicePricingTierUncheckedUpdateInput>
    /**
     * Choose, which ServicePricingTier to update.
     */
    where: ServicePricingTierWhereUniqueInput
  }

  /**
   * ServicePricingTier updateMany
   */
  export type ServicePricingTierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePricingTiers.
     */
    data: XOR<ServicePricingTierUpdateManyMutationInput, ServicePricingTierUncheckedUpdateManyInput>
    /**
     * Filter which ServicePricingTiers to update
     */
    where?: ServicePricingTierWhereInput
    /**
     * Limit how many ServicePricingTiers to update.
     */
    limit?: number
  }

  /**
   * ServicePricingTier updateManyAndReturn
   */
  export type ServicePricingTierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * The data used to update ServicePricingTiers.
     */
    data: XOR<ServicePricingTierUpdateManyMutationInput, ServicePricingTierUncheckedUpdateManyInput>
    /**
     * Filter which ServicePricingTiers to update
     */
    where?: ServicePricingTierWhereInput
    /**
     * Limit how many ServicePricingTiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePricingTier upsert
   */
  export type ServicePricingTierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePricingTier to update in case it exists.
     */
    where: ServicePricingTierWhereUniqueInput
    /**
     * In case the ServicePricingTier found by the `where` argument doesn't exist, create a new ServicePricingTier with this data.
     */
    create: XOR<ServicePricingTierCreateInput, ServicePricingTierUncheckedCreateInput>
    /**
     * In case the ServicePricingTier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePricingTierUpdateInput, ServicePricingTierUncheckedUpdateInput>
  }

  /**
   * ServicePricingTier delete
   */
  export type ServicePricingTierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
    /**
     * Filter which ServicePricingTier to delete.
     */
    where: ServicePricingTierWhereUniqueInput
  }

  /**
   * ServicePricingTier deleteMany
   */
  export type ServicePricingTierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePricingTiers to delete
     */
    where?: ServicePricingTierWhereInput
    /**
     * Limit how many ServicePricingTiers to delete.
     */
    limit?: number
  }

  /**
   * ServicePricingTier without action
   */
  export type ServicePricingTierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePricingTier
     */
    select?: ServicePricingTierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePricingTier
     */
    omit?: ServicePricingTierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePricingTierInclude<ExtArgs> | null
  }


  /**
   * Model ServiceProvider
   */

  export type AggregateServiceProvider = {
    _count: ServiceProviderCountAggregateOutputType | null
    _avg: ServiceProviderAvgAggregateOutputType | null
    _sum: ServiceProviderSumAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  export type ServiceProviderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    yearsExperience: number | null
    radiusKm: number | null
    totalRating: number | null
    reviewCount: number | null
    completedJobs: number | null
  }

  export type ServiceProviderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    yearsExperience: number | null
    radiusKm: number | null
    totalRating: number | null
    reviewCount: number | null
    completedJobs: number | null
  }

  export type ServiceProviderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    businessName: string | null
    businessRegistrationNumber: string | null
    description: string | null
    yearsExperience: number | null
    radiusKm: number | null
    isInsured: boolean | null
    isBackgroundChecked: boolean | null
    totalRating: number | null
    reviewCount: number | null
    completedJobs: number | null
    isVerified: boolean | null
    verificationStatus: string | null
    isAcceptingNewJobs: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceProviderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    businessName: string | null
    businessRegistrationNumber: string | null
    description: string | null
    yearsExperience: number | null
    radiusKm: number | null
    isInsured: boolean | null
    isBackgroundChecked: boolean | null
    totalRating: number | null
    reviewCount: number | null
    completedJobs: number | null
    isVerified: boolean | null
    verificationStatus: string | null
    isAcceptingNewJobs: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceProviderCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    businessRegistrationNumber: number
    description: number
    yearsExperience: number
    serviceAreas: number
    radiusKm: number
    isInsured: number
    isBackgroundChecked: number
    totalRating: number
    reviewCount: number
    completedJobs: number
    isVerified: number
    verificationStatus: number
    isAcceptingNewJobs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceProviderAvgAggregateInputType = {
    id?: true
    userId?: true
    yearsExperience?: true
    radiusKm?: true
    totalRating?: true
    reviewCount?: true
    completedJobs?: true
  }

  export type ServiceProviderSumAggregateInputType = {
    id?: true
    userId?: true
    yearsExperience?: true
    radiusKm?: true
    totalRating?: true
    reviewCount?: true
    completedJobs?: true
  }

  export type ServiceProviderMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessRegistrationNumber?: true
    description?: true
    yearsExperience?: true
    radiusKm?: true
    isInsured?: true
    isBackgroundChecked?: true
    totalRating?: true
    reviewCount?: true
    completedJobs?: true
    isVerified?: true
    verificationStatus?: true
    isAcceptingNewJobs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceProviderMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessRegistrationNumber?: true
    description?: true
    yearsExperience?: true
    radiusKm?: true
    isInsured?: true
    isBackgroundChecked?: true
    totalRating?: true
    reviewCount?: true
    completedJobs?: true
    isVerified?: true
    verificationStatus?: true
    isAcceptingNewJobs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceProviderCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    businessRegistrationNumber?: true
    description?: true
    yearsExperience?: true
    serviceAreas?: true
    radiusKm?: true
    isInsured?: true
    isBackgroundChecked?: true
    totalRating?: true
    reviewCount?: true
    completedJobs?: true
    isVerified?: true
    verificationStatus?: true
    isAcceptingNewJobs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProvider to aggregate.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceProviders
    **/
    _count?: true | ServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type GetServiceProviderAggregateType<T extends ServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvider[P]>
      : GetScalarType<T[P], AggregateServiceProvider[P]>
  }




  export type ServiceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceProviderWhereInput
    orderBy?: ServiceProviderOrderByWithAggregationInput | ServiceProviderOrderByWithAggregationInput[]
    by: ServiceProviderScalarFieldEnum[] | ServiceProviderScalarFieldEnum
    having?: ServiceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProviderCountAggregateInputType | true
    _avg?: ServiceProviderAvgAggregateInputType
    _sum?: ServiceProviderSumAggregateInputType
    _min?: ServiceProviderMinAggregateInputType
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type ServiceProviderGroupByOutputType = {
    id: number
    userId: number
    businessName: string | null
    businessRegistrationNumber: string | null
    description: string | null
    yearsExperience: number | null
    serviceAreas: string[]
    radiusKm: number | null
    isInsured: boolean
    isBackgroundChecked: boolean
    totalRating: number
    reviewCount: number
    completedJobs: number
    isVerified: boolean
    verificationStatus: string
    isAcceptingNewJobs: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceProviderCountAggregateOutputType | null
    _avg: ServiceProviderAvgAggregateOutputType | null
    _sum: ServiceProviderSumAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  type GetServiceProviderGroupByPayload<T extends ServiceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessRegistrationNumber?: boolean
    description?: boolean
    yearsExperience?: boolean
    serviceAreas?: boolean
    radiusKm?: boolean
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: boolean
    reviewCount?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    isAcceptingNewJobs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    providerServices?: boolean | ServiceProvider$providerServicesArgs<ExtArgs>
    availabilities?: boolean | ServiceProvider$availabilitiesArgs<ExtArgs>
    documents?: boolean | ServiceProvider$documentsArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessRegistrationNumber?: boolean
    description?: boolean
    yearsExperience?: boolean
    serviceAreas?: boolean
    radiusKm?: boolean
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: boolean
    reviewCount?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    isAcceptingNewJobs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessRegistrationNumber?: boolean
    description?: boolean
    yearsExperience?: boolean
    serviceAreas?: boolean
    radiusKm?: boolean
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: boolean
    reviewCount?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    isAcceptingNewJobs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    businessRegistrationNumber?: boolean
    description?: boolean
    yearsExperience?: boolean
    serviceAreas?: boolean
    radiusKm?: boolean
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: boolean
    reviewCount?: boolean
    completedJobs?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    isAcceptingNewJobs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "businessRegistrationNumber" | "description" | "yearsExperience" | "serviceAreas" | "radiusKm" | "isInsured" | "isBackgroundChecked" | "totalRating" | "reviewCount" | "completedJobs" | "isVerified" | "verificationStatus" | "isAcceptingNewJobs" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceProvider"]>
  export type ServiceProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    providerServices?: boolean | ServiceProvider$providerServicesArgs<ExtArgs>
    availabilities?: boolean | ServiceProvider$availabilitiesArgs<ExtArgs>
    documents?: boolean | ServiceProvider$documentsArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceProvider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[]
      availabilities: Prisma.$ProviderAvailabilityPayload<ExtArgs>[]
      documents: Prisma.$ProviderDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      businessName: string | null
      businessRegistrationNumber: string | null
      description: string | null
      yearsExperience: number | null
      serviceAreas: string[]
      radiusKm: number | null
      isInsured: boolean
      isBackgroundChecked: boolean
      totalRating: number
      reviewCount: number
      completedJobs: number
      isVerified: boolean
      verificationStatus: string
      isAcceptingNewJobs: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceProvider"]>
    composites: {}
  }

  type ServiceProviderGetPayload<S extends boolean | null | undefined | ServiceProviderDefaultArgs> = $Result.GetResult<Prisma.$ServiceProviderPayload, S>

  type ServiceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceProviderCountAggregateInputType | true
    }

  export interface ServiceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceProvider'], meta: { name: 'ServiceProvider' } }
    /**
     * Find zero or one ServiceProvider that matches the filter.
     * @param {ServiceProviderFindUniqueArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceProviderFindUniqueArgs>(args: SelectSubset<T, ServiceProviderFindUniqueArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceProviderFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceProviderFindFirstArgs>(args?: SelectSubset<T, ServiceProviderFindFirstArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany()
     * 
     * // Get first 10 ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceProviderFindManyArgs>(args?: SelectSubset<T, ServiceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceProvider.
     * @param {ServiceProviderCreateArgs} args - Arguments to create a ServiceProvider.
     * @example
     * // Create one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.create({
     *   data: {
     *     // ... data to create a ServiceProvider
     *   }
     * })
     * 
     */
    create<T extends ServiceProviderCreateArgs>(args: SelectSubset<T, ServiceProviderCreateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceProviders.
     * @param {ServiceProviderCreateManyArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceProviderCreateManyArgs>(args?: SelectSubset<T, ServiceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceProviders and returns the data saved in the database.
     * @param {ServiceProviderCreateManyAndReturnArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceProvider.
     * @param {ServiceProviderDeleteArgs} args - Arguments to delete one ServiceProvider.
     * @example
     * // Delete one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvider
     *   }
     * })
     * 
     */
    delete<T extends ServiceProviderDeleteArgs>(args: SelectSubset<T, ServiceProviderDeleteArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceProvider.
     * @param {ServiceProviderUpdateArgs} args - Arguments to update one ServiceProvider.
     * @example
     * // Update one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceProviderUpdateArgs>(args: SelectSubset<T, ServiceProviderUpdateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceProviders.
     * @param {ServiceProviderDeleteManyArgs} args - Arguments to filter ServiceProviders to delete.
     * @example
     * // Delete a few ServiceProviders
     * const { count } = await prisma.serviceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceProviderDeleteManyArgs>(args?: SelectSubset<T, ServiceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceProviderUpdateManyArgs>(args: SelectSubset<T, ServiceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders and returns the data updated in the database.
     * @param {ServiceProviderUpdateManyAndReturnArgs} args - Arguments to update many ServiceProviders.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceProvider.
     * @param {ServiceProviderUpsertArgs} args - Arguments to update or create a ServiceProvider.
     * @example
     * // Update or create a ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.upsert({
     *   create: {
     *     // ... data to create a ServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvider we want to update
     *   }
     * })
     */
    upsert<T extends ServiceProviderUpsertArgs>(args: SelectSubset<T, ServiceProviderUpsertArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderCountArgs} args - Arguments to filter ServiceProviders to count.
     * @example
     * // Count the number of ServiceProviders
     * const count = await prisma.serviceProvider.count({
     *   where: {
     *     // ... the filter for the ServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends ServiceProviderCountArgs>(
      args?: Subset<T, ServiceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceProviderAggregateArgs>(args: Subset<T, ServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetServiceProviderAggregateType<T>>

    /**
     * Group by ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProviderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceProvider model
   */
  readonly fields: ServiceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    providerServices<T extends ServiceProvider$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilities<T extends ServiceProvider$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends ServiceProvider$documentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceProvider model
   */
  interface ServiceProviderFieldRefs {
    readonly id: FieldRef<"ServiceProvider", 'Int'>
    readonly userId: FieldRef<"ServiceProvider", 'Int'>
    readonly businessName: FieldRef<"ServiceProvider", 'String'>
    readonly businessRegistrationNumber: FieldRef<"ServiceProvider", 'String'>
    readonly description: FieldRef<"ServiceProvider", 'String'>
    readonly yearsExperience: FieldRef<"ServiceProvider", 'Int'>
    readonly serviceAreas: FieldRef<"ServiceProvider", 'String[]'>
    readonly radiusKm: FieldRef<"ServiceProvider", 'Int'>
    readonly isInsured: FieldRef<"ServiceProvider", 'Boolean'>
    readonly isBackgroundChecked: FieldRef<"ServiceProvider", 'Boolean'>
    readonly totalRating: FieldRef<"ServiceProvider", 'Float'>
    readonly reviewCount: FieldRef<"ServiceProvider", 'Int'>
    readonly completedJobs: FieldRef<"ServiceProvider", 'Int'>
    readonly isVerified: FieldRef<"ServiceProvider", 'Boolean'>
    readonly verificationStatus: FieldRef<"ServiceProvider", 'String'>
    readonly isAcceptingNewJobs: FieldRef<"ServiceProvider", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceProvider", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceProvider findUnique
   */
  export type ServiceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findUniqueOrThrow
   */
  export type ServiceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findFirst
   */
  export type ServiceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findFirstOrThrow
   */
  export type ServiceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findMany
   */
  export type ServiceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProviders to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider create
   */
  export type ServiceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceProvider.
     */
    data: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
  }

  /**
   * ServiceProvider createMany
   */
  export type ServiceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceProvider createManyAndReturn
   */
  export type ServiceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceProvider update
   */
  export type ServiceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceProvider.
     */
    data: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
    /**
     * Choose, which ServiceProvider to update.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider updateMany
   */
  export type ServiceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
  }

  /**
   * ServiceProvider updateManyAndReturn
   */
  export type ServiceProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceProvider upsert
   */
  export type ServiceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceProvider to update in case it exists.
     */
    where: ServiceProviderWhereUniqueInput
    /**
     * In case the ServiceProvider found by the `where` argument doesn't exist, create a new ServiceProvider with this data.
     */
    create: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
    /**
     * In case the ServiceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
  }

  /**
   * ServiceProvider delete
   */
  export type ServiceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter which ServiceProvider to delete.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider deleteMany
   */
  export type ServiceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProviders to delete
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to delete.
     */
    limit?: number
  }

  /**
   * ServiceProvider.providerServices
   */
  export type ServiceProvider$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    cursor?: ProviderServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ServiceProvider.availabilities
   */
  export type ServiceProvider$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    where?: ProviderAvailabilityWhereInput
    orderBy?: ProviderAvailabilityOrderByWithRelationInput | ProviderAvailabilityOrderByWithRelationInput[]
    cursor?: ProviderAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderAvailabilityScalarFieldEnum | ProviderAvailabilityScalarFieldEnum[]
  }

  /**
   * ServiceProvider.documents
   */
  export type ServiceProvider$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    where?: ProviderDocumentWhereInput
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    cursor?: ProviderDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderDocumentScalarFieldEnum | ProviderDocumentScalarFieldEnum[]
  }

  /**
   * ServiceProvider without action
   */
  export type ServiceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
  }


  /**
   * Model ProviderService
   */

  export type AggregateProviderService = {
    _count: ProviderServiceCountAggregateOutputType | null
    _avg: ProviderServiceAvgAggregateOutputType | null
    _sum: ProviderServiceSumAggregateOutputType | null
    _min: ProviderServiceMinAggregateOutputType | null
    _max: ProviderServiceMaxAggregateOutputType | null
  }

  export type ProviderServiceAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
    serviceId: number | null
    customPrice: Decimal | null
  }

  export type ProviderServiceSumAggregateOutputType = {
    id: number | null
    providerId: number | null
    serviceId: number | null
    customPrice: Decimal | null
  }

  export type ProviderServiceMinAggregateOutputType = {
    id: number | null
    providerId: number | null
    serviceId: number | null
    customPrice: Decimal | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type ProviderServiceMaxAggregateOutputType = {
    id: number | null
    providerId: number | null
    serviceId: number | null
    customPrice: Decimal | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type ProviderServiceCountAggregateOutputType = {
    id: number
    providerId: number
    serviceId: number
    customPrice: number
    isAvailable: number
    createdAt: number
    _all: number
  }


  export type ProviderServiceAvgAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    customPrice?: true
  }

  export type ProviderServiceSumAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    customPrice?: true
  }

  export type ProviderServiceMinAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    customPrice?: true
    isAvailable?: true
    createdAt?: true
  }

  export type ProviderServiceMaxAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    customPrice?: true
    isAvailable?: true
    createdAt?: true
  }

  export type ProviderServiceCountAggregateInputType = {
    id?: true
    providerId?: true
    serviceId?: true
    customPrice?: true
    isAvailable?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderService to aggregate.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderServices
    **/
    _count?: true | ProviderServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderServiceMaxAggregateInputType
  }

  export type GetProviderServiceAggregateType<T extends ProviderServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderService[P]>
      : GetScalarType<T[P], AggregateProviderService[P]>
  }




  export type ProviderServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithAggregationInput | ProviderServiceOrderByWithAggregationInput[]
    by: ProviderServiceScalarFieldEnum[] | ProviderServiceScalarFieldEnum
    having?: ProviderServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderServiceCountAggregateInputType | true
    _avg?: ProviderServiceAvgAggregateInputType
    _sum?: ProviderServiceSumAggregateInputType
    _min?: ProviderServiceMinAggregateInputType
    _max?: ProviderServiceMaxAggregateInputType
  }

  export type ProviderServiceGroupByOutputType = {
    id: number
    providerId: number
    serviceId: number
    customPrice: Decimal | null
    isAvailable: boolean
    createdAt: Date
    _count: ProviderServiceCountAggregateOutputType | null
    _avg: ProviderServiceAvgAggregateOutputType | null
    _sum: ProviderServiceSumAggregateOutputType | null
    _min: ProviderServiceMinAggregateOutputType | null
    _max: ProviderServiceMaxAggregateOutputType | null
  }

  type GetProviderServiceGroupByPayload<T extends ProviderServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>
        }
      >
    >


  export type ProviderServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectScalar = {
    id?: boolean
    providerId?: boolean
    serviceId?: boolean
    customPrice?: boolean
    isAvailable?: boolean
    createdAt?: boolean
  }

  export type ProviderServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "serviceId" | "customPrice" | "isAvailable" | "createdAt", ExtArgs["result"]["providerService"]>
  export type ProviderServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProviderServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProviderServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ProviderServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderService"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      providerId: number
      serviceId: number
      customPrice: Prisma.Decimal | null
      isAvailable: boolean
      createdAt: Date
    }, ExtArgs["result"]["providerService"]>
    composites: {}
  }

  type ProviderServiceGetPayload<S extends boolean | null | undefined | ProviderServiceDefaultArgs> = $Result.GetResult<Prisma.$ProviderServicePayload, S>

  type ProviderServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderServiceCountAggregateInputType | true
    }

  export interface ProviderServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderService'], meta: { name: 'ProviderService' } }
    /**
     * Find zero or one ProviderService that matches the filter.
     * @param {ProviderServiceFindUniqueArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderServiceFindUniqueArgs>(args: SelectSubset<T, ProviderServiceFindUniqueArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderServiceFindUniqueOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderServiceFindFirstArgs>(args?: SelectSubset<T, ProviderServiceFindFirstArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderServices
     * const providerServices = await prisma.providerService.findMany()
     * 
     * // Get first 10 ProviderServices
     * const providerServices = await prisma.providerService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderServiceFindManyArgs>(args?: SelectSubset<T, ProviderServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderService.
     * @param {ProviderServiceCreateArgs} args - Arguments to create a ProviderService.
     * @example
     * // Create one ProviderService
     * const ProviderService = await prisma.providerService.create({
     *   data: {
     *     // ... data to create a ProviderService
     *   }
     * })
     * 
     */
    create<T extends ProviderServiceCreateArgs>(args: SelectSubset<T, ProviderServiceCreateArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderServices.
     * @param {ProviderServiceCreateManyArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderServiceCreateManyArgs>(args?: SelectSubset<T, ProviderServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderServices and returns the data saved in the database.
     * @param {ProviderServiceCreateManyAndReturnArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderServices and only return the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderService.
     * @param {ProviderServiceDeleteArgs} args - Arguments to delete one ProviderService.
     * @example
     * // Delete one ProviderService
     * const ProviderService = await prisma.providerService.delete({
     *   where: {
     *     // ... filter to delete one ProviderService
     *   }
     * })
     * 
     */
    delete<T extends ProviderServiceDeleteArgs>(args: SelectSubset<T, ProviderServiceDeleteArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderService.
     * @param {ProviderServiceUpdateArgs} args - Arguments to update one ProviderService.
     * @example
     * // Update one ProviderService
     * const providerService = await prisma.providerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderServiceUpdateArgs>(args: SelectSubset<T, ProviderServiceUpdateArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderServices.
     * @param {ProviderServiceDeleteManyArgs} args - Arguments to filter ProviderServices to delete.
     * @example
     * // Delete a few ProviderServices
     * const { count } = await prisma.providerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderServiceDeleteManyArgs>(args?: SelectSubset<T, ProviderServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderServices
     * const providerService = await prisma.providerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderServiceUpdateManyArgs>(args: SelectSubset<T, ProviderServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices and returns the data updated in the database.
     * @param {ProviderServiceUpdateManyAndReturnArgs} args - Arguments to update many ProviderServices.
     * @example
     * // Update many ProviderServices
     * const providerService = await prisma.providerService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderServices and only return the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderService.
     * @param {ProviderServiceUpsertArgs} args - Arguments to update or create a ProviderService.
     * @example
     * // Update or create a ProviderService
     * const providerService = await prisma.providerService.upsert({
     *   create: {
     *     // ... data to create a ProviderService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderService we want to update
     *   }
     * })
     */
    upsert<T extends ProviderServiceUpsertArgs>(args: SelectSubset<T, ProviderServiceUpsertArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceCountArgs} args - Arguments to filter ProviderServices to count.
     * @example
     * // Count the number of ProviderServices
     * const count = await prisma.providerService.count({
     *   where: {
     *     // ... the filter for the ProviderServices we want to count
     *   }
     * })
    **/
    count<T extends ProviderServiceCountArgs>(
      args?: Subset<T, ProviderServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderServiceAggregateArgs>(args: Subset<T, ProviderServiceAggregateArgs>): Prisma.PrismaPromise<GetProviderServiceAggregateType<T>>

    /**
     * Group by ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProviderServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderService model
   */
  readonly fields: ProviderServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderService model
   */
  interface ProviderServiceFieldRefs {
    readonly id: FieldRef<"ProviderService", 'Int'>
    readonly providerId: FieldRef<"ProviderService", 'Int'>
    readonly serviceId: FieldRef<"ProviderService", 'Int'>
    readonly customPrice: FieldRef<"ProviderService", 'Decimal'>
    readonly isAvailable: FieldRef<"ProviderService", 'Boolean'>
    readonly createdAt: FieldRef<"ProviderService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderService findUnique
   */
  export type ProviderServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService findUniqueOrThrow
   */
  export type ProviderServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService findFirst
   */
  export type ProviderServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService findFirstOrThrow
   */
  export type ProviderServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService findMany
   */
  export type ProviderServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService create
   */
  export type ProviderServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderService.
     */
    data: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>
  }

  /**
   * ProviderService createMany
   */
  export type ProviderServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderService createManyAndReturn
   */
  export type ProviderServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderService update
   */
  export type ProviderServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderService.
     */
    data: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>
    /**
     * Choose, which ProviderService to update.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService updateMany
   */
  export type ProviderServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
  }

  /**
   * ProviderService updateManyAndReturn
   */
  export type ProviderServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderService upsert
   */
  export type ProviderServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderService to update in case it exists.
     */
    where: ProviderServiceWhereUniqueInput
    /**
     * In case the ProviderService found by the `where` argument doesn't exist, create a new ProviderService with this data.
     */
    create: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>
    /**
     * In case the ProviderService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>
  }

  /**
   * ProviderService delete
   */
  export type ProviderServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter which ProviderService to delete.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService deleteMany
   */
  export type ProviderServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderServices to delete
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to delete.
     */
    limit?: number
  }

  /**
   * ProviderService without action
   */
  export type ProviderServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
  }


  /**
   * Model ProviderAvailability
   */

  export type AggregateProviderAvailability = {
    _count: ProviderAvailabilityCountAggregateOutputType | null
    _avg: ProviderAvailabilityAvgAggregateOutputType | null
    _sum: ProviderAvailabilitySumAggregateOutputType | null
    _min: ProviderAvailabilityMinAggregateOutputType | null
    _max: ProviderAvailabilityMaxAggregateOutputType | null
  }

  export type ProviderAvailabilityAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
    dayOfWeek: number | null
  }

  export type ProviderAvailabilitySumAggregateOutputType = {
    id: number | null
    providerId: number | null
    dayOfWeek: number | null
  }

  export type ProviderAvailabilityMinAggregateOutputType = {
    id: number | null
    providerId: number | null
    dayOfWeek: number | null
    startTime: Date | null
    endTime: Date | null
    isRecurring: boolean | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
  }

  export type ProviderAvailabilityMaxAggregateOutputType = {
    id: number | null
    providerId: number | null
    dayOfWeek: number | null
    startTime: Date | null
    endTime: Date | null
    isRecurring: boolean | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
  }

  export type ProviderAvailabilityCountAggregateOutputType = {
    id: number
    providerId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isRecurring: number
    validFrom: number
    validUntil: number
    createdAt: number
    _all: number
  }


  export type ProviderAvailabilityAvgAggregateInputType = {
    id?: true
    providerId?: true
    dayOfWeek?: true
  }

  export type ProviderAvailabilitySumAggregateInputType = {
    id?: true
    providerId?: true
    dayOfWeek?: true
  }

  export type ProviderAvailabilityMinAggregateInputType = {
    id?: true
    providerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
  }

  export type ProviderAvailabilityMaxAggregateInputType = {
    id?: true
    providerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
  }

  export type ProviderAvailabilityCountAggregateInputType = {
    id?: true
    providerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isRecurring?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAvailability to aggregate.
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAvailabilities to fetch.
     */
    orderBy?: ProviderAvailabilityOrderByWithRelationInput | ProviderAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderAvailabilities
    **/
    _count?: true | ProviderAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderAvailabilityMaxAggregateInputType
  }

  export type GetProviderAvailabilityAggregateType<T extends ProviderAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderAvailability[P]>
      : GetScalarType<T[P], AggregateProviderAvailability[P]>
  }




  export type ProviderAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderAvailabilityWhereInput
    orderBy?: ProviderAvailabilityOrderByWithAggregationInput | ProviderAvailabilityOrderByWithAggregationInput[]
    by: ProviderAvailabilityScalarFieldEnum[] | ProviderAvailabilityScalarFieldEnum
    having?: ProviderAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderAvailabilityCountAggregateInputType | true
    _avg?: ProviderAvailabilityAvgAggregateInputType
    _sum?: ProviderAvailabilitySumAggregateInputType
    _min?: ProviderAvailabilityMinAggregateInputType
    _max?: ProviderAvailabilityMaxAggregateInputType
  }

  export type ProviderAvailabilityGroupByOutputType = {
    id: number
    providerId: number
    dayOfWeek: number
    startTime: Date
    endTime: Date
    isRecurring: boolean
    validFrom: Date
    validUntil: Date | null
    createdAt: Date
    _count: ProviderAvailabilityCountAggregateOutputType | null
    _avg: ProviderAvailabilityAvgAggregateOutputType | null
    _sum: ProviderAvailabilitySumAggregateOutputType | null
    _min: ProviderAvailabilityMinAggregateOutputType | null
    _max: ProviderAvailabilityMaxAggregateOutputType | null
  }

  type GetProviderAvailabilityGroupByPayload<T extends ProviderAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type ProviderAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerAvailability"]>

  export type ProviderAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerAvailability"]>

  export type ProviderAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerAvailability"]>

  export type ProviderAvailabilitySelectScalar = {
    id?: boolean
    providerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isRecurring?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
  }

  export type ProviderAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "dayOfWeek" | "startTime" | "endTime" | "isRecurring" | "validFrom" | "validUntil" | "createdAt", ExtArgs["result"]["providerAvailability"]>
  export type ProviderAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type ProviderAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type ProviderAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }

  export type $ProviderAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderAvailability"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      providerId: number
      dayOfWeek: number
      startTime: Date
      endTime: Date
      isRecurring: boolean
      validFrom: Date
      validUntil: Date | null
      createdAt: Date
    }, ExtArgs["result"]["providerAvailability"]>
    composites: {}
  }

  type ProviderAvailabilityGetPayload<S extends boolean | null | undefined | ProviderAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$ProviderAvailabilityPayload, S>

  type ProviderAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderAvailabilityCountAggregateInputType | true
    }

  export interface ProviderAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderAvailability'], meta: { name: 'ProviderAvailability' } }
    /**
     * Find zero or one ProviderAvailability that matches the filter.
     * @param {ProviderAvailabilityFindUniqueArgs} args - Arguments to find a ProviderAvailability
     * @example
     * // Get one ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderAvailabilityFindUniqueArgs>(args: SelectSubset<T, ProviderAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a ProviderAvailability
     * @example
     * // Get one ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityFindFirstArgs} args - Arguments to find a ProviderAvailability
     * @example
     * // Get one ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderAvailabilityFindFirstArgs>(args?: SelectSubset<T, ProviderAvailabilityFindFirstArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityFindFirstOrThrowArgs} args - Arguments to find a ProviderAvailability
     * @example
     * // Get one ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderAvailabilities
     * const providerAvailabilities = await prisma.providerAvailability.findMany()
     * 
     * // Get first 10 ProviderAvailabilities
     * const providerAvailabilities = await prisma.providerAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerAvailabilityWithIdOnly = await prisma.providerAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderAvailabilityFindManyArgs>(args?: SelectSubset<T, ProviderAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderAvailability.
     * @param {ProviderAvailabilityCreateArgs} args - Arguments to create a ProviderAvailability.
     * @example
     * // Create one ProviderAvailability
     * const ProviderAvailability = await prisma.providerAvailability.create({
     *   data: {
     *     // ... data to create a ProviderAvailability
     *   }
     * })
     * 
     */
    create<T extends ProviderAvailabilityCreateArgs>(args: SelectSubset<T, ProviderAvailabilityCreateArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderAvailabilities.
     * @param {ProviderAvailabilityCreateManyArgs} args - Arguments to create many ProviderAvailabilities.
     * @example
     * // Create many ProviderAvailabilities
     * const providerAvailability = await prisma.providerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderAvailabilityCreateManyArgs>(args?: SelectSubset<T, ProviderAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderAvailabilities and returns the data saved in the database.
     * @param {ProviderAvailabilityCreateManyAndReturnArgs} args - Arguments to create many ProviderAvailabilities.
     * @example
     * // Create many ProviderAvailabilities
     * const providerAvailability = await prisma.providerAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderAvailabilities and only return the `id`
     * const providerAvailabilityWithIdOnly = await prisma.providerAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderAvailability.
     * @param {ProviderAvailabilityDeleteArgs} args - Arguments to delete one ProviderAvailability.
     * @example
     * // Delete one ProviderAvailability
     * const ProviderAvailability = await prisma.providerAvailability.delete({
     *   where: {
     *     // ... filter to delete one ProviderAvailability
     *   }
     * })
     * 
     */
    delete<T extends ProviderAvailabilityDeleteArgs>(args: SelectSubset<T, ProviderAvailabilityDeleteArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderAvailability.
     * @param {ProviderAvailabilityUpdateArgs} args - Arguments to update one ProviderAvailability.
     * @example
     * // Update one ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderAvailabilityUpdateArgs>(args: SelectSubset<T, ProviderAvailabilityUpdateArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderAvailabilities.
     * @param {ProviderAvailabilityDeleteManyArgs} args - Arguments to filter ProviderAvailabilities to delete.
     * @example
     * // Delete a few ProviderAvailabilities
     * const { count } = await prisma.providerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderAvailabilityDeleteManyArgs>(args?: SelectSubset<T, ProviderAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderAvailabilities
     * const providerAvailability = await prisma.providerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderAvailabilityUpdateManyArgs>(args: SelectSubset<T, ProviderAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderAvailabilities and returns the data updated in the database.
     * @param {ProviderAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many ProviderAvailabilities.
     * @example
     * // Update many ProviderAvailabilities
     * const providerAvailability = await prisma.providerAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderAvailabilities and only return the `id`
     * const providerAvailabilityWithIdOnly = await prisma.providerAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderAvailability.
     * @param {ProviderAvailabilityUpsertArgs} args - Arguments to update or create a ProviderAvailability.
     * @example
     * // Update or create a ProviderAvailability
     * const providerAvailability = await prisma.providerAvailability.upsert({
     *   create: {
     *     // ... data to create a ProviderAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderAvailability we want to update
     *   }
     * })
     */
    upsert<T extends ProviderAvailabilityUpsertArgs>(args: SelectSubset<T, ProviderAvailabilityUpsertArgs<ExtArgs>>): Prisma__ProviderAvailabilityClient<$Result.GetResult<Prisma.$ProviderAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityCountArgs} args - Arguments to filter ProviderAvailabilities to count.
     * @example
     * // Count the number of ProviderAvailabilities
     * const count = await prisma.providerAvailability.count({
     *   where: {
     *     // ... the filter for the ProviderAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends ProviderAvailabilityCountArgs>(
      args?: Subset<T, ProviderAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAvailabilityAggregateArgs>(args: Subset<T, ProviderAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetProviderAvailabilityAggregateType<T>>

    /**
     * Group by ProviderAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: ProviderAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderAvailability model
   */
  readonly fields: ProviderAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderAvailability model
   */
  interface ProviderAvailabilityFieldRefs {
    readonly id: FieldRef<"ProviderAvailability", 'Int'>
    readonly providerId: FieldRef<"ProviderAvailability", 'Int'>
    readonly dayOfWeek: FieldRef<"ProviderAvailability", 'Int'>
    readonly startTime: FieldRef<"ProviderAvailability", 'DateTime'>
    readonly endTime: FieldRef<"ProviderAvailability", 'DateTime'>
    readonly isRecurring: FieldRef<"ProviderAvailability", 'Boolean'>
    readonly validFrom: FieldRef<"ProviderAvailability", 'DateTime'>
    readonly validUntil: FieldRef<"ProviderAvailability", 'DateTime'>
    readonly createdAt: FieldRef<"ProviderAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderAvailability findUnique
   */
  export type ProviderAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAvailability to fetch.
     */
    where: ProviderAvailabilityWhereUniqueInput
  }

  /**
   * ProviderAvailability findUniqueOrThrow
   */
  export type ProviderAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAvailability to fetch.
     */
    where: ProviderAvailabilityWhereUniqueInput
  }

  /**
   * ProviderAvailability findFirst
   */
  export type ProviderAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAvailability to fetch.
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAvailabilities to fetch.
     */
    orderBy?: ProviderAvailabilityOrderByWithRelationInput | ProviderAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAvailabilities.
     */
    cursor?: ProviderAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAvailabilities.
     */
    distinct?: ProviderAvailabilityScalarFieldEnum | ProviderAvailabilityScalarFieldEnum[]
  }

  /**
   * ProviderAvailability findFirstOrThrow
   */
  export type ProviderAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAvailability to fetch.
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAvailabilities to fetch.
     */
    orderBy?: ProviderAvailabilityOrderByWithRelationInput | ProviderAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAvailabilities.
     */
    cursor?: ProviderAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAvailabilities.
     */
    distinct?: ProviderAvailabilityScalarFieldEnum | ProviderAvailabilityScalarFieldEnum[]
  }

  /**
   * ProviderAvailability findMany
   */
  export type ProviderAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAvailabilities to fetch.
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAvailabilities to fetch.
     */
    orderBy?: ProviderAvailabilityOrderByWithRelationInput | ProviderAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderAvailabilities.
     */
    cursor?: ProviderAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAvailabilities.
     */
    skip?: number
    distinct?: ProviderAvailabilityScalarFieldEnum | ProviderAvailabilityScalarFieldEnum[]
  }

  /**
   * ProviderAvailability create
   */
  export type ProviderAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderAvailability.
     */
    data: XOR<ProviderAvailabilityCreateInput, ProviderAvailabilityUncheckedCreateInput>
  }

  /**
   * ProviderAvailability createMany
   */
  export type ProviderAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderAvailabilities.
     */
    data: ProviderAvailabilityCreateManyInput | ProviderAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderAvailability createManyAndReturn
   */
  export type ProviderAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderAvailabilities.
     */
    data: ProviderAvailabilityCreateManyInput | ProviderAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderAvailability update
   */
  export type ProviderAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderAvailability.
     */
    data: XOR<ProviderAvailabilityUpdateInput, ProviderAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which ProviderAvailability to update.
     */
    where: ProviderAvailabilityWhereUniqueInput
  }

  /**
   * ProviderAvailability updateMany
   */
  export type ProviderAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderAvailabilities.
     */
    data: XOR<ProviderAvailabilityUpdateManyMutationInput, ProviderAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which ProviderAvailabilities to update
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * Limit how many ProviderAvailabilities to update.
     */
    limit?: number
  }

  /**
   * ProviderAvailability updateManyAndReturn
   */
  export type ProviderAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update ProviderAvailabilities.
     */
    data: XOR<ProviderAvailabilityUpdateManyMutationInput, ProviderAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which ProviderAvailabilities to update
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * Limit how many ProviderAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderAvailability upsert
   */
  export type ProviderAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderAvailability to update in case it exists.
     */
    where: ProviderAvailabilityWhereUniqueInput
    /**
     * In case the ProviderAvailability found by the `where` argument doesn't exist, create a new ProviderAvailability with this data.
     */
    create: XOR<ProviderAvailabilityCreateInput, ProviderAvailabilityUncheckedCreateInput>
    /**
     * In case the ProviderAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderAvailabilityUpdateInput, ProviderAvailabilityUncheckedUpdateInput>
  }

  /**
   * ProviderAvailability delete
   */
  export type ProviderAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which ProviderAvailability to delete.
     */
    where: ProviderAvailabilityWhereUniqueInput
  }

  /**
   * ProviderAvailability deleteMany
   */
  export type ProviderAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAvailabilities to delete
     */
    where?: ProviderAvailabilityWhereInput
    /**
     * Limit how many ProviderAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * ProviderAvailability without action
   */
  export type ProviderAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAvailability
     */
    select?: ProviderAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAvailability
     */
    omit?: ProviderAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model ProviderDocument
   */

  export type AggregateProviderDocument = {
    _count: ProviderDocumentCountAggregateOutputType | null
    _avg: ProviderDocumentAvgAggregateOutputType | null
    _sum: ProviderDocumentSumAggregateOutputType | null
    _min: ProviderDocumentMinAggregateOutputType | null
    _max: ProviderDocumentMaxAggregateOutputType | null
  }

  export type ProviderDocumentAvgAggregateOutputType = {
    id: number | null
    providerId: number | null
    verifiedBy: number | null
  }

  export type ProviderDocumentSumAggregateOutputType = {
    id: number | null
    providerId: number | null
    verifiedBy: number | null
  }

  export type ProviderDocumentMinAggregateOutputType = {
    id: number | null
    providerId: number | null
    documentType: string | null
    documentUrl: string | null
    documentName: string | null
    expirationDate: Date | null
    isVerified: boolean | null
    verifiedBy: number | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type ProviderDocumentMaxAggregateOutputType = {
    id: number | null
    providerId: number | null
    documentType: string | null
    documentUrl: string | null
    documentName: string | null
    expirationDate: Date | null
    isVerified: boolean | null
    verifiedBy: number | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type ProviderDocumentCountAggregateOutputType = {
    id: number
    providerId: number
    documentType: number
    documentUrl: number
    documentName: number
    expirationDate: number
    isVerified: number
    verifiedBy: number
    verifiedAt: number
    createdAt: number
    _all: number
  }


  export type ProviderDocumentAvgAggregateInputType = {
    id?: true
    providerId?: true
    verifiedBy?: true
  }

  export type ProviderDocumentSumAggregateInputType = {
    id?: true
    providerId?: true
    verifiedBy?: true
  }

  export type ProviderDocumentMinAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    documentUrl?: true
    documentName?: true
    expirationDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type ProviderDocumentMaxAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    documentUrl?: true
    documentName?: true
    expirationDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type ProviderDocumentCountAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    documentUrl?: true
    documentName?: true
    expirationDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderDocument to aggregate.
     */
    where?: ProviderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocuments to fetch.
     */
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderDocuments
    **/
    _count?: true | ProviderDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderDocumentMaxAggregateInputType
  }

  export type GetProviderDocumentAggregateType<T extends ProviderDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderDocument[P]>
      : GetScalarType<T[P], AggregateProviderDocument[P]>
  }




  export type ProviderDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderDocumentWhereInput
    orderBy?: ProviderDocumentOrderByWithAggregationInput | ProviderDocumentOrderByWithAggregationInput[]
    by: ProviderDocumentScalarFieldEnum[] | ProviderDocumentScalarFieldEnum
    having?: ProviderDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderDocumentCountAggregateInputType | true
    _avg?: ProviderDocumentAvgAggregateInputType
    _sum?: ProviderDocumentSumAggregateInputType
    _min?: ProviderDocumentMinAggregateInputType
    _max?: ProviderDocumentMaxAggregateInputType
  }

  export type ProviderDocumentGroupByOutputType = {
    id: number
    providerId: number
    documentType: string
    documentUrl: string
    documentName: string | null
    expirationDate: Date | null
    isVerified: boolean
    verifiedBy: number | null
    verifiedAt: Date | null
    createdAt: Date
    _count: ProviderDocumentCountAggregateOutputType | null
    _avg: ProviderDocumentAvgAggregateOutputType | null
    _sum: ProviderDocumentSumAggregateOutputType | null
    _min: ProviderDocumentMinAggregateOutputType | null
    _max: ProviderDocumentMaxAggregateOutputType | null
  }

  type GetProviderDocumentGroupByPayload<T extends ProviderDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ProviderDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    documentName?: boolean
    expirationDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["providerDocument"]>

  export type ProviderDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    documentName?: boolean
    expirationDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["providerDocument"]>

  export type ProviderDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    documentName?: boolean
    expirationDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["providerDocument"]>

  export type ProviderDocumentSelectScalar = {
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    documentName?: boolean
    expirationDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }

  export type ProviderDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "documentType" | "documentUrl" | "documentName" | "expirationDate" | "isVerified" | "verifiedBy" | "verifiedAt" | "createdAt", ExtArgs["result"]["providerDocument"]>
  export type ProviderDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }
  export type ProviderDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }
  export type ProviderDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    verifiedByUser?: boolean | ProviderDocument$verifiedByUserArgs<ExtArgs>
  }

  export type $ProviderDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderDocument"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
      verifiedByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      providerId: number
      documentType: string
      documentUrl: string
      documentName: string | null
      expirationDate: Date | null
      isVerified: boolean
      verifiedBy: number | null
      verifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["providerDocument"]>
    composites: {}
  }

  type ProviderDocumentGetPayload<S extends boolean | null | undefined | ProviderDocumentDefaultArgs> = $Result.GetResult<Prisma.$ProviderDocumentPayload, S>

  type ProviderDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderDocumentCountAggregateInputType | true
    }

  export interface ProviderDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderDocument'], meta: { name: 'ProviderDocument' } }
    /**
     * Find zero or one ProviderDocument that matches the filter.
     * @param {ProviderDocumentFindUniqueArgs} args - Arguments to find a ProviderDocument
     * @example
     * // Get one ProviderDocument
     * const providerDocument = await prisma.providerDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderDocumentFindUniqueArgs>(args: SelectSubset<T, ProviderDocumentFindUniqueArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderDocumentFindUniqueOrThrowArgs} args - Arguments to find a ProviderDocument
     * @example
     * // Get one ProviderDocument
     * const providerDocument = await prisma.providerDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentFindFirstArgs} args - Arguments to find a ProviderDocument
     * @example
     * // Get one ProviderDocument
     * const providerDocument = await prisma.providerDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderDocumentFindFirstArgs>(args?: SelectSubset<T, ProviderDocumentFindFirstArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentFindFirstOrThrowArgs} args - Arguments to find a ProviderDocument
     * @example
     * // Get one ProviderDocument
     * const providerDocument = await prisma.providerDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderDocuments
     * const providerDocuments = await prisma.providerDocument.findMany()
     * 
     * // Get first 10 ProviderDocuments
     * const providerDocuments = await prisma.providerDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerDocumentWithIdOnly = await prisma.providerDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderDocumentFindManyArgs>(args?: SelectSubset<T, ProviderDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderDocument.
     * @param {ProviderDocumentCreateArgs} args - Arguments to create a ProviderDocument.
     * @example
     * // Create one ProviderDocument
     * const ProviderDocument = await prisma.providerDocument.create({
     *   data: {
     *     // ... data to create a ProviderDocument
     *   }
     * })
     * 
     */
    create<T extends ProviderDocumentCreateArgs>(args: SelectSubset<T, ProviderDocumentCreateArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderDocuments.
     * @param {ProviderDocumentCreateManyArgs} args - Arguments to create many ProviderDocuments.
     * @example
     * // Create many ProviderDocuments
     * const providerDocument = await prisma.providerDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderDocumentCreateManyArgs>(args?: SelectSubset<T, ProviderDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderDocuments and returns the data saved in the database.
     * @param {ProviderDocumentCreateManyAndReturnArgs} args - Arguments to create many ProviderDocuments.
     * @example
     * // Create many ProviderDocuments
     * const providerDocument = await prisma.providerDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderDocuments and only return the `id`
     * const providerDocumentWithIdOnly = await prisma.providerDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderDocument.
     * @param {ProviderDocumentDeleteArgs} args - Arguments to delete one ProviderDocument.
     * @example
     * // Delete one ProviderDocument
     * const ProviderDocument = await prisma.providerDocument.delete({
     *   where: {
     *     // ... filter to delete one ProviderDocument
     *   }
     * })
     * 
     */
    delete<T extends ProviderDocumentDeleteArgs>(args: SelectSubset<T, ProviderDocumentDeleteArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderDocument.
     * @param {ProviderDocumentUpdateArgs} args - Arguments to update one ProviderDocument.
     * @example
     * // Update one ProviderDocument
     * const providerDocument = await prisma.providerDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderDocumentUpdateArgs>(args: SelectSubset<T, ProviderDocumentUpdateArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderDocuments.
     * @param {ProviderDocumentDeleteManyArgs} args - Arguments to filter ProviderDocuments to delete.
     * @example
     * // Delete a few ProviderDocuments
     * const { count } = await prisma.providerDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDocumentDeleteManyArgs>(args?: SelectSubset<T, ProviderDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderDocuments
     * const providerDocument = await prisma.providerDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderDocumentUpdateManyArgs>(args: SelectSubset<T, ProviderDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderDocuments and returns the data updated in the database.
     * @param {ProviderDocumentUpdateManyAndReturnArgs} args - Arguments to update many ProviderDocuments.
     * @example
     * // Update many ProviderDocuments
     * const providerDocument = await prisma.providerDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderDocuments and only return the `id`
     * const providerDocumentWithIdOnly = await prisma.providerDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderDocument.
     * @param {ProviderDocumentUpsertArgs} args - Arguments to update or create a ProviderDocument.
     * @example
     * // Update or create a ProviderDocument
     * const providerDocument = await prisma.providerDocument.upsert({
     *   create: {
     *     // ... data to create a ProviderDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderDocument we want to update
     *   }
     * })
     */
    upsert<T extends ProviderDocumentUpsertArgs>(args: SelectSubset<T, ProviderDocumentUpsertArgs<ExtArgs>>): Prisma__ProviderDocumentClient<$Result.GetResult<Prisma.$ProviderDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentCountArgs} args - Arguments to filter ProviderDocuments to count.
     * @example
     * // Count the number of ProviderDocuments
     * const count = await prisma.providerDocument.count({
     *   where: {
     *     // ... the filter for the ProviderDocuments we want to count
     *   }
     * })
    **/
    count<T extends ProviderDocumentCountArgs>(
      args?: Subset<T, ProviderDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderDocumentAggregateArgs>(args: Subset<T, ProviderDocumentAggregateArgs>): Prisma.PrismaPromise<GetProviderDocumentAggregateType<T>>

    /**
     * Group by ProviderDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ProviderDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderDocument model
   */
  readonly fields: ProviderDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifiedByUser<T extends ProviderDocument$verifiedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDocument$verifiedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderDocument model
   */
  interface ProviderDocumentFieldRefs {
    readonly id: FieldRef<"ProviderDocument", 'Int'>
    readonly providerId: FieldRef<"ProviderDocument", 'Int'>
    readonly documentType: FieldRef<"ProviderDocument", 'String'>
    readonly documentUrl: FieldRef<"ProviderDocument", 'String'>
    readonly documentName: FieldRef<"ProviderDocument", 'String'>
    readonly expirationDate: FieldRef<"ProviderDocument", 'DateTime'>
    readonly isVerified: FieldRef<"ProviderDocument", 'Boolean'>
    readonly verifiedBy: FieldRef<"ProviderDocument", 'Int'>
    readonly verifiedAt: FieldRef<"ProviderDocument", 'DateTime'>
    readonly createdAt: FieldRef<"ProviderDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderDocument findUnique
   */
  export type ProviderDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDocument to fetch.
     */
    where: ProviderDocumentWhereUniqueInput
  }

  /**
   * ProviderDocument findUniqueOrThrow
   */
  export type ProviderDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDocument to fetch.
     */
    where: ProviderDocumentWhereUniqueInput
  }

  /**
   * ProviderDocument findFirst
   */
  export type ProviderDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDocument to fetch.
     */
    where?: ProviderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocuments to fetch.
     */
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDocuments.
     */
    cursor?: ProviderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDocuments.
     */
    distinct?: ProviderDocumentScalarFieldEnum | ProviderDocumentScalarFieldEnum[]
  }

  /**
   * ProviderDocument findFirstOrThrow
   */
  export type ProviderDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDocument to fetch.
     */
    where?: ProviderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocuments to fetch.
     */
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDocuments.
     */
    cursor?: ProviderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDocuments.
     */
    distinct?: ProviderDocumentScalarFieldEnum | ProviderDocumentScalarFieldEnum[]
  }

  /**
   * ProviderDocument findMany
   */
  export type ProviderDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDocuments to fetch.
     */
    where?: ProviderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocuments to fetch.
     */
    orderBy?: ProviderDocumentOrderByWithRelationInput | ProviderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderDocuments.
     */
    cursor?: ProviderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocuments.
     */
    skip?: number
    distinct?: ProviderDocumentScalarFieldEnum | ProviderDocumentScalarFieldEnum[]
  }

  /**
   * ProviderDocument create
   */
  export type ProviderDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderDocument.
     */
    data: XOR<ProviderDocumentCreateInput, ProviderDocumentUncheckedCreateInput>
  }

  /**
   * ProviderDocument createMany
   */
  export type ProviderDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderDocuments.
     */
    data: ProviderDocumentCreateManyInput | ProviderDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderDocument createManyAndReturn
   */
  export type ProviderDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderDocuments.
     */
    data: ProviderDocumentCreateManyInput | ProviderDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderDocument update
   */
  export type ProviderDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderDocument.
     */
    data: XOR<ProviderDocumentUpdateInput, ProviderDocumentUncheckedUpdateInput>
    /**
     * Choose, which ProviderDocument to update.
     */
    where: ProviderDocumentWhereUniqueInput
  }

  /**
   * ProviderDocument updateMany
   */
  export type ProviderDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderDocuments.
     */
    data: XOR<ProviderDocumentUpdateManyMutationInput, ProviderDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ProviderDocuments to update
     */
    where?: ProviderDocumentWhereInput
    /**
     * Limit how many ProviderDocuments to update.
     */
    limit?: number
  }

  /**
   * ProviderDocument updateManyAndReturn
   */
  export type ProviderDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ProviderDocuments.
     */
    data: XOR<ProviderDocumentUpdateManyMutationInput, ProviderDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ProviderDocuments to update
     */
    where?: ProviderDocumentWhereInput
    /**
     * Limit how many ProviderDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderDocument upsert
   */
  export type ProviderDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderDocument to update in case it exists.
     */
    where: ProviderDocumentWhereUniqueInput
    /**
     * In case the ProviderDocument found by the `where` argument doesn't exist, create a new ProviderDocument with this data.
     */
    create: XOR<ProviderDocumentCreateInput, ProviderDocumentUncheckedCreateInput>
    /**
     * In case the ProviderDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderDocumentUpdateInput, ProviderDocumentUncheckedUpdateInput>
  }

  /**
   * ProviderDocument delete
   */
  export type ProviderDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
    /**
     * Filter which ProviderDocument to delete.
     */
    where: ProviderDocumentWhereUniqueInput
  }

  /**
   * ProviderDocument deleteMany
   */
  export type ProviderDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderDocuments to delete
     */
    where?: ProviderDocumentWhereInput
    /**
     * Limit how many ProviderDocuments to delete.
     */
    limit?: number
  }

  /**
   * ProviderDocument.verifiedByUser
   */
  export type ProviderDocument$verifiedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProviderDocument without action
   */
  export type ProviderDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDocument
     */
    select?: ProviderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDocument
     */
    omit?: ProviderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    userType: 'userType',
    avatarUrl: 'avatarUrl',
    isVerified: 'isVerified',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metadata: 'metadata'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    bio: 'bio',
    languages: 'languages',
    notificationPreferences: 'notificationPreferences',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const ServiceCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    iconUrl: 'iconUrl',
    parentCategoryId: 'parentCategoryId',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ServiceCategoryScalarFieldEnum = (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    basePrice: 'basePrice',
    durationMinutes: 'durationMinutes',
    imageUrls: 'imageUrls',
    requirements: 'requirements',
    isPopular: 'isPopular',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServicePricingTierScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    tierName: 'tierName',
    description: 'description',
    price: 'price',
    durationMinutes: 'durationMinutes',
    includes: 'includes',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ServicePricingTierScalarFieldEnum = (typeof ServicePricingTierScalarFieldEnum)[keyof typeof ServicePricingTierScalarFieldEnum]


  export const ServiceProviderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    businessRegistrationNumber: 'businessRegistrationNumber',
    description: 'description',
    yearsExperience: 'yearsExperience',
    serviceAreas: 'serviceAreas',
    radiusKm: 'radiusKm',
    isInsured: 'isInsured',
    isBackgroundChecked: 'isBackgroundChecked',
    totalRating: 'totalRating',
    reviewCount: 'reviewCount',
    completedJobs: 'completedJobs',
    isVerified: 'isVerified',
    verificationStatus: 'verificationStatus',
    isAcceptingNewJobs: 'isAcceptingNewJobs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceProviderScalarFieldEnum = (typeof ServiceProviderScalarFieldEnum)[keyof typeof ServiceProviderScalarFieldEnum]


  export const ProviderServiceScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    serviceId: 'serviceId',
    customPrice: 'customPrice',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt'
  };

  export type ProviderServiceScalarFieldEnum = (typeof ProviderServiceScalarFieldEnum)[keyof typeof ProviderServiceScalarFieldEnum]


  export const ProviderAvailabilityScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isRecurring: 'isRecurring',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    createdAt: 'createdAt'
  };

  export type ProviderAvailabilityScalarFieldEnum = (typeof ProviderAvailabilityScalarFieldEnum)[keyof typeof ProviderAvailabilityScalarFieldEnum]


  export const ProviderDocumentScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    documentType: 'documentType',
    documentUrl: 'documentUrl',
    documentName: 'documentName',
    expirationDate: 'expirationDate',
    isVerified: 'isVerified',
    verifiedBy: 'verifiedBy',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
  };

  export type ProviderDocumentScalarFieldEnum = (typeof ProviderDocumentScalarFieldEnum)[keyof typeof ProviderDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    metadata?: JsonNullableFilter<"User">
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    serviceProvider?: XOR<ServiceProviderNullableScalarRelationFilter, ServiceProviderWhereInput> | null
    verifiedDocuments?: ProviderDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    userType?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
    emailVerificationTokens?: EmailVerificationTokenOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
    serviceProvider?: ServiceProviderOrderByWithRelationInput
    verifiedDocuments?: ProviderDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    metadata?: JsonNullableFilter<"User">
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    emailVerificationTokens?: EmailVerificationTokenListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    serviceProvider?: XOR<ServiceProviderNullableScalarRelationFilter, ServiceProviderWhereInput> | null
    verifiedDocuments?: ProviderDocumentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    userType?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"User">
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: IntFilter<"UserProfile"> | number
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: EnumGenderNullableFilter<"UserProfile"> | $Enums.Gender | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    languages?: StringNullableListFilter<"UserProfile">
    notificationPreferences?: JsonFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    languages?: SortOrder
    notificationPreferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: EnumGenderNullableFilter<"UserProfile"> | $Enums.Gender | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    languages?: StringNullableListFilter<"UserProfile">
    notificationPreferences?: JsonFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    languages?: SortOrder
    notificationPreferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: IntWithAggregatesFilter<"UserProfile"> | number
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"UserProfile"> | $Enums.Gender | null
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    languages?: StringNullableListFilter<"UserProfile">
    notificationPreferences?: JsonWithAggregatesFilter<"UserProfile">
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    otp?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_otp?: PasswordResetTokenUserIdOtpCompoundUniqueInput
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: IntFilter<"PasswordResetToken"> | number
    otp?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_otp">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    userId?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    otp?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: IntFilter<"EmailVerificationToken"> | number
    userId?: IntFilter<"EmailVerificationToken"> | number
    otp?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_otp?: EmailVerificationTokenUserIdOtpCompoundUniqueInput
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    userId?: IntFilter<"EmailVerificationToken"> | number
    otp?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_otp">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _avg?: EmailVerificationTokenAvgOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
    _sum?: EmailVerificationTokenSumOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailVerificationToken"> | number
    userId?: IntWithAggregatesFilter<"EmailVerificationToken"> | number
    otp?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
  }

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    id?: IntFilter<"ServiceCategory"> | number
    name?: StringFilter<"ServiceCategory"> | string
    slug?: StringFilter<"ServiceCategory"> | string
    description?: StringNullableFilter<"ServiceCategory"> | string | null
    iconUrl?: StringNullableFilter<"ServiceCategory"> | string | null
    parentCategoryId?: IntNullableFilter<"ServiceCategory"> | number | null
    sortOrder?: IntFilter<"ServiceCategory"> | number
    isActive?: BoolFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    parentCategory?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    subCategories?: ServiceCategoryListRelationFilter
    services?: ServiceListRelationFilter
  }

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    parentCategory?: ServiceCategoryOrderByWithRelationInput
    subCategories?: ServiceCategoryOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    name?: StringFilter<"ServiceCategory"> | string
    description?: StringNullableFilter<"ServiceCategory"> | string | null
    iconUrl?: StringNullableFilter<"ServiceCategory"> | string | null
    parentCategoryId?: IntNullableFilter<"ServiceCategory"> | number | null
    sortOrder?: IntFilter<"ServiceCategory"> | number
    isActive?: BoolFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    parentCategory?: XOR<ServiceCategoryNullableScalarRelationFilter, ServiceCategoryWhereInput> | null
    subCategories?: ServiceCategoryListRelationFilter
    services?: ServiceListRelationFilter
  }, "id" | "slug">

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCategoryCountOrderByAggregateInput
    _avg?: ServiceCategoryAvgOrderByAggregateInput
    _max?: ServiceCategoryMaxOrderByAggregateInput
    _min?: ServiceCategoryMinOrderByAggregateInput
    _sum?: ServiceCategorySumOrderByAggregateInput
  }

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceCategory"> | number
    name?: StringWithAggregatesFilter<"ServiceCategory"> | string
    slug?: StringWithAggregatesFilter<"ServiceCategory"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceCategory"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"ServiceCategory"> | string | null
    parentCategoryId?: IntNullableWithAggregatesFilter<"ServiceCategory"> | number | null
    sortOrder?: IntWithAggregatesFilter<"ServiceCategory"> | number
    isActive?: BoolWithAggregatesFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceCategory"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    categoryId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    basePrice?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntNullableFilter<"Service"> | number | null
    imageUrls?: StringNullableListFilter<"Service">
    requirements?: StringNullableFilter<"Service"> | string | null
    isPopular?: BoolFilter<"Service"> | boolean
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    category?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
    pricingTiers?: ServicePricingTierListRelationFilter
    providerServices?: ProviderServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    requirements?: SortOrderInput | SortOrder
    isPopular?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: ServiceCategoryOrderByWithRelationInput
    pricingTiers?: ServicePricingTierOrderByRelationAggregateInput
    providerServices?: ProviderServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    categoryId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    basePrice?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntNullableFilter<"Service"> | number | null
    imageUrls?: StringNullableListFilter<"Service">
    requirements?: StringNullableFilter<"Service"> | string | null
    isPopular?: BoolFilter<"Service"> | boolean
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    category?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
    pricingTiers?: ServicePricingTierListRelationFilter
    providerServices?: ProviderServiceListRelationFilter
  }, "id" | "slug">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    imageUrls?: SortOrder
    requirements?: SortOrderInput | SortOrder
    isPopular?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    categoryId?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    slug?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    basePrice?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntNullableWithAggregatesFilter<"Service"> | number | null
    imageUrls?: StringNullableListFilter<"Service">
    requirements?: StringNullableWithAggregatesFilter<"Service"> | string | null
    isPopular?: BoolWithAggregatesFilter<"Service"> | boolean
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ServicePricingTierWhereInput = {
    AND?: ServicePricingTierWhereInput | ServicePricingTierWhereInput[]
    OR?: ServicePricingTierWhereInput[]
    NOT?: ServicePricingTierWhereInput | ServicePricingTierWhereInput[]
    id?: IntFilter<"ServicePricingTier"> | number
    serviceId?: IntFilter<"ServicePricingTier"> | number
    tierName?: StringFilter<"ServicePricingTier"> | string
    description?: StringNullableFilter<"ServicePricingTier"> | string | null
    price?: DecimalFilter<"ServicePricingTier"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ServicePricingTier"> | number
    includes?: StringNullableListFilter<"ServicePricingTier">
    sortOrder?: IntFilter<"ServicePricingTier"> | number
    createdAt?: DateTimeFilter<"ServicePricingTier"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ServicePricingTierOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    tierName?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    includes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ServicePricingTierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicePricingTierWhereInput | ServicePricingTierWhereInput[]
    OR?: ServicePricingTierWhereInput[]
    NOT?: ServicePricingTierWhereInput | ServicePricingTierWhereInput[]
    serviceId?: IntFilter<"ServicePricingTier"> | number
    tierName?: StringFilter<"ServicePricingTier"> | string
    description?: StringNullableFilter<"ServicePricingTier"> | string | null
    price?: DecimalFilter<"ServicePricingTier"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ServicePricingTier"> | number
    includes?: StringNullableListFilter<"ServicePricingTier">
    sortOrder?: IntFilter<"ServicePricingTier"> | number
    createdAt?: DateTimeFilter<"ServicePricingTier"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type ServicePricingTierOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    tierName?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    includes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ServicePricingTierCountOrderByAggregateInput
    _avg?: ServicePricingTierAvgOrderByAggregateInput
    _max?: ServicePricingTierMaxOrderByAggregateInput
    _min?: ServicePricingTierMinOrderByAggregateInput
    _sum?: ServicePricingTierSumOrderByAggregateInput
  }

  export type ServicePricingTierScalarWhereWithAggregatesInput = {
    AND?: ServicePricingTierScalarWhereWithAggregatesInput | ServicePricingTierScalarWhereWithAggregatesInput[]
    OR?: ServicePricingTierScalarWhereWithAggregatesInput[]
    NOT?: ServicePricingTierScalarWhereWithAggregatesInput | ServicePricingTierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicePricingTier"> | number
    serviceId?: IntWithAggregatesFilter<"ServicePricingTier"> | number
    tierName?: StringWithAggregatesFilter<"ServicePricingTier"> | string
    description?: StringNullableWithAggregatesFilter<"ServicePricingTier"> | string | null
    price?: DecimalWithAggregatesFilter<"ServicePricingTier"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntWithAggregatesFilter<"ServicePricingTier"> | number
    includes?: StringNullableListFilter<"ServicePricingTier">
    sortOrder?: IntWithAggregatesFilter<"ServicePricingTier"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServicePricingTier"> | Date | string
  }

  export type ServiceProviderWhereInput = {
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    id?: IntFilter<"ServiceProvider"> | number
    userId?: IntFilter<"ServiceProvider"> | number
    businessName?: StringNullableFilter<"ServiceProvider"> | string | null
    businessRegistrationNumber?: StringNullableFilter<"ServiceProvider"> | string | null
    description?: StringNullableFilter<"ServiceProvider"> | string | null
    yearsExperience?: IntNullableFilter<"ServiceProvider"> | number | null
    serviceAreas?: StringNullableListFilter<"ServiceProvider">
    radiusKm?: IntNullableFilter<"ServiceProvider"> | number | null
    isInsured?: BoolFilter<"ServiceProvider"> | boolean
    isBackgroundChecked?: BoolFilter<"ServiceProvider"> | boolean
    totalRating?: FloatFilter<"ServiceProvider"> | number
    reviewCount?: IntFilter<"ServiceProvider"> | number
    completedJobs?: IntFilter<"ServiceProvider"> | number
    isVerified?: BoolFilter<"ServiceProvider"> | boolean
    verificationStatus?: StringFilter<"ServiceProvider"> | string
    isAcceptingNewJobs?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    providerServices?: ProviderServiceListRelationFilter
    availabilities?: ProviderAvailabilityListRelationFilter
    documents?: ProviderDocumentListRelationFilter
  }

  export type ServiceProviderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessRegistrationNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    serviceAreas?: SortOrder
    radiusKm?: SortOrderInput | SortOrder
    isInsured?: SortOrder
    isBackgroundChecked?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    isAcceptingNewJobs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    providerServices?: ProviderServiceOrderByRelationAggregateInput
    availabilities?: ProviderAvailabilityOrderByRelationAggregateInput
    documents?: ProviderDocumentOrderByRelationAggregateInput
  }

  export type ServiceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    businessName?: StringNullableFilter<"ServiceProvider"> | string | null
    businessRegistrationNumber?: StringNullableFilter<"ServiceProvider"> | string | null
    description?: StringNullableFilter<"ServiceProvider"> | string | null
    yearsExperience?: IntNullableFilter<"ServiceProvider"> | number | null
    serviceAreas?: StringNullableListFilter<"ServiceProvider">
    radiusKm?: IntNullableFilter<"ServiceProvider"> | number | null
    isInsured?: BoolFilter<"ServiceProvider"> | boolean
    isBackgroundChecked?: BoolFilter<"ServiceProvider"> | boolean
    totalRating?: FloatFilter<"ServiceProvider"> | number
    reviewCount?: IntFilter<"ServiceProvider"> | number
    completedJobs?: IntFilter<"ServiceProvider"> | number
    isVerified?: BoolFilter<"ServiceProvider"> | boolean
    verificationStatus?: StringFilter<"ServiceProvider"> | string
    isAcceptingNewJobs?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    providerServices?: ProviderServiceListRelationFilter
    availabilities?: ProviderAvailabilityListRelationFilter
    documents?: ProviderDocumentListRelationFilter
  }, "id" | "userId">

  export type ServiceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    businessRegistrationNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    serviceAreas?: SortOrder
    radiusKm?: SortOrderInput | SortOrder
    isInsured?: SortOrder
    isBackgroundChecked?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    isAcceptingNewJobs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceProviderCountOrderByAggregateInput
    _avg?: ServiceProviderAvgOrderByAggregateInput
    _max?: ServiceProviderMaxOrderByAggregateInput
    _min?: ServiceProviderMinOrderByAggregateInput
    _sum?: ServiceProviderSumOrderByAggregateInput
  }

  export type ServiceProviderScalarWhereWithAggregatesInput = {
    AND?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    OR?: ServiceProviderScalarWhereWithAggregatesInput[]
    NOT?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceProvider"> | number
    userId?: IntWithAggregatesFilter<"ServiceProvider"> | number
    businessName?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    businessRegistrationNumber?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    description?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    yearsExperience?: IntNullableWithAggregatesFilter<"ServiceProvider"> | number | null
    serviceAreas?: StringNullableListFilter<"ServiceProvider">
    radiusKm?: IntNullableWithAggregatesFilter<"ServiceProvider"> | number | null
    isInsured?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    isBackgroundChecked?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    totalRating?: FloatWithAggregatesFilter<"ServiceProvider"> | number
    reviewCount?: IntWithAggregatesFilter<"ServiceProvider"> | number
    completedJobs?: IntWithAggregatesFilter<"ServiceProvider"> | number
    isVerified?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    verificationStatus?: StringWithAggregatesFilter<"ServiceProvider"> | string
    isAcceptingNewJobs?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceProvider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceProvider"> | Date | string
  }

  export type ProviderServiceWhereInput = {
    AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    OR?: ProviderServiceWhereInput[]
    NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    id?: IntFilter<"ProviderService"> | number
    providerId?: IntFilter<"ProviderService"> | number
    serviceId?: IntFilter<"ProviderService"> | number
    customPrice?: DecimalNullableFilter<"ProviderService"> | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFilter<"ProviderService"> | boolean
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ProviderServiceOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ProviderServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    providerId_serviceId?: ProviderServiceProviderIdServiceIdCompoundUniqueInput
    AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    OR?: ProviderServiceWhereInput[]
    NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    providerId?: IntFilter<"ProviderService"> | number
    serviceId?: IntFilter<"ProviderService"> | number
    customPrice?: DecimalNullableFilter<"ProviderService"> | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFilter<"ProviderService"> | boolean
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "providerId_serviceId">

  export type ProviderServiceOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    _count?: ProviderServiceCountOrderByAggregateInput
    _avg?: ProviderServiceAvgOrderByAggregateInput
    _max?: ProviderServiceMaxOrderByAggregateInput
    _min?: ProviderServiceMinOrderByAggregateInput
    _sum?: ProviderServiceSumOrderByAggregateInput
  }

  export type ProviderServiceScalarWhereWithAggregatesInput = {
    AND?: ProviderServiceScalarWhereWithAggregatesInput | ProviderServiceScalarWhereWithAggregatesInput[]
    OR?: ProviderServiceScalarWhereWithAggregatesInput[]
    NOT?: ProviderServiceScalarWhereWithAggregatesInput | ProviderServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProviderService"> | number
    providerId?: IntWithAggregatesFilter<"ProviderService"> | number
    serviceId?: IntWithAggregatesFilter<"ProviderService"> | number
    customPrice?: DecimalNullableWithAggregatesFilter<"ProviderService"> | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolWithAggregatesFilter<"ProviderService"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProviderService"> | Date | string
  }

  export type ProviderAvailabilityWhereInput = {
    AND?: ProviderAvailabilityWhereInput | ProviderAvailabilityWhereInput[]
    OR?: ProviderAvailabilityWhereInput[]
    NOT?: ProviderAvailabilityWhereInput | ProviderAvailabilityWhereInput[]
    id?: IntFilter<"ProviderAvailability"> | number
    providerId?: IntFilter<"ProviderAvailability"> | number
    dayOfWeek?: IntFilter<"ProviderAvailability"> | number
    startTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    endTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    isRecurring?: BoolFilter<"ProviderAvailability"> | boolean
    validFrom?: DateTimeFilter<"ProviderAvailability"> | Date | string
    validUntil?: DateTimeNullableFilter<"ProviderAvailability"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderAvailability"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }

  export type ProviderAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
  }

  export type ProviderAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProviderAvailabilityWhereInput | ProviderAvailabilityWhereInput[]
    OR?: ProviderAvailabilityWhereInput[]
    NOT?: ProviderAvailabilityWhereInput | ProviderAvailabilityWhereInput[]
    providerId?: IntFilter<"ProviderAvailability"> | number
    dayOfWeek?: IntFilter<"ProviderAvailability"> | number
    startTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    endTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    isRecurring?: BoolFilter<"ProviderAvailability"> | boolean
    validFrom?: DateTimeFilter<"ProviderAvailability"> | Date | string
    validUntil?: DateTimeNullableFilter<"ProviderAvailability"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderAvailability"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }, "id">

  export type ProviderAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProviderAvailabilityCountOrderByAggregateInput
    _avg?: ProviderAvailabilityAvgOrderByAggregateInput
    _max?: ProviderAvailabilityMaxOrderByAggregateInput
    _min?: ProviderAvailabilityMinOrderByAggregateInput
    _sum?: ProviderAvailabilitySumOrderByAggregateInput
  }

  export type ProviderAvailabilityScalarWhereWithAggregatesInput = {
    AND?: ProviderAvailabilityScalarWhereWithAggregatesInput | ProviderAvailabilityScalarWhereWithAggregatesInput[]
    OR?: ProviderAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: ProviderAvailabilityScalarWhereWithAggregatesInput | ProviderAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProviderAvailability"> | number
    providerId?: IntWithAggregatesFilter<"ProviderAvailability"> | number
    dayOfWeek?: IntWithAggregatesFilter<"ProviderAvailability"> | number
    startTime?: DateTimeWithAggregatesFilter<"ProviderAvailability"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ProviderAvailability"> | Date | string
    isRecurring?: BoolWithAggregatesFilter<"ProviderAvailability"> | boolean
    validFrom?: DateTimeWithAggregatesFilter<"ProviderAvailability"> | Date | string
    validUntil?: DateTimeNullableWithAggregatesFilter<"ProviderAvailability"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProviderAvailability"> | Date | string
  }

  export type ProviderDocumentWhereInput = {
    AND?: ProviderDocumentWhereInput | ProviderDocumentWhereInput[]
    OR?: ProviderDocumentWhereInput[]
    NOT?: ProviderDocumentWhereInput | ProviderDocumentWhereInput[]
    id?: IntFilter<"ProviderDocument"> | number
    providerId?: IntFilter<"ProviderDocument"> | number
    documentType?: StringFilter<"ProviderDocument"> | string
    documentUrl?: StringFilter<"ProviderDocument"> | string
    documentName?: StringNullableFilter<"ProviderDocument"> | string | null
    expirationDate?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    isVerified?: BoolFilter<"ProviderDocument"> | boolean
    verifiedBy?: IntNullableFilter<"ProviderDocument"> | number | null
    verifiedAt?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderDocument"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    verifiedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProviderDocumentOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    documentName?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
    verifiedByUser?: UserOrderByWithRelationInput
  }

  export type ProviderDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProviderDocumentWhereInput | ProviderDocumentWhereInput[]
    OR?: ProviderDocumentWhereInput[]
    NOT?: ProviderDocumentWhereInput | ProviderDocumentWhereInput[]
    providerId?: IntFilter<"ProviderDocument"> | number
    documentType?: StringFilter<"ProviderDocument"> | string
    documentUrl?: StringFilter<"ProviderDocument"> | string
    documentName?: StringNullableFilter<"ProviderDocument"> | string | null
    expirationDate?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    isVerified?: BoolFilter<"ProviderDocument"> | boolean
    verifiedBy?: IntNullableFilter<"ProviderDocument"> | number | null
    verifiedAt?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderDocument"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    verifiedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProviderDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    documentName?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProviderDocumentCountOrderByAggregateInput
    _avg?: ProviderDocumentAvgOrderByAggregateInput
    _max?: ProviderDocumentMaxOrderByAggregateInput
    _min?: ProviderDocumentMinOrderByAggregateInput
    _sum?: ProviderDocumentSumOrderByAggregateInput
  }

  export type ProviderDocumentScalarWhereWithAggregatesInput = {
    AND?: ProviderDocumentScalarWhereWithAggregatesInput | ProviderDocumentScalarWhereWithAggregatesInput[]
    OR?: ProviderDocumentScalarWhereWithAggregatesInput[]
    NOT?: ProviderDocumentScalarWhereWithAggregatesInput | ProviderDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProviderDocument"> | number
    providerId?: IntWithAggregatesFilter<"ProviderDocument"> | number
    documentType?: StringWithAggregatesFilter<"ProviderDocument"> | string
    documentUrl?: StringWithAggregatesFilter<"ProviderDocument"> | string
    documentName?: StringNullableWithAggregatesFilter<"ProviderDocument"> | string | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"ProviderDocument"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"ProviderDocument"> | boolean
    verifiedBy?: IntNullableWithAggregatesFilter<"ProviderDocument"> | number | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"ProviderDocument"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProviderDocument"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderUncheckedCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUncheckedUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileCreateInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bio?: string | null
    languages?: UserProfileCreatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: number
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bio?: string | null
    languages?: UserProfileCreatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: number
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bio?: string | null
    languages?: UserProfileCreatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    userId: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    userId: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateInput = {
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationTokensInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: number
    userId: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: number
    userId: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryCreateInput = {
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    parentCategory?: ServiceCategoryCreateNestedOneWithoutSubCategoriesInput
    subCategories?: ServiceCategoryCreateNestedManyWithoutParentCategoryInput
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    parentCategoryId?: number | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: ServiceCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: ServiceCategoryUpdateOneWithoutSubCategoriesNestedInput
    subCategories?: ServiceCategoryUpdateManyWithoutParentCategoryNestedInput
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: ServiceCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    parentCategoryId?: number | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ServiceCategoryCreateNestedOneWithoutServicesInput
    pricingTiers?: ServicePricingTierCreateNestedManyWithoutServiceInput
    providerServices?: ProviderServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: ServicePricingTierUncheckedCreateNestedManyWithoutServiceInput
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput
    pricingTiers?: ServicePricingTierUpdateManyWithoutServiceNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: ServicePricingTierUncheckedUpdateManyWithoutServiceNestedInput
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierCreateInput = {
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutPricingTiersInput
  }

  export type ServicePricingTierUncheckedCreateInput = {
    id?: number
    serviceId: number
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ServicePricingTierUpdateInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPricingTiersNestedInput
  }

  export type ServicePricingTierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierCreateManyInput = {
    id?: number
    serviceId: number
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ServicePricingTierUpdateManyMutationInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderCreateInput = {
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServiceProviderInput
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateInput = {
    id?: number
    userId: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityUncheckedCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUpdateInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServiceProviderNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUncheckedUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderCreateManyInput = {
    id?: number
    userId: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceProviderUpdateManyMutationInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateInput = {
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutProviderServicesInput
    service: ServiceCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateInput = {
    id?: number
    providerId: number
    serviceId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateInput = {
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateManyInput = {
    id?: number
    providerId: number
    serviceId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateManyMutationInput = {
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityCreateInput = {
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutAvailabilitiesInput
  }

  export type ProviderAvailabilityUncheckedCreateInput = {
    id?: number
    providerId: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderAvailabilityUpdateInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type ProviderAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityCreateManyInput = {
    id?: number
    providerId: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderAvailabilityUpdateManyMutationInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentCreateInput = {
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutDocumentsInput
    verifiedByUser?: UserCreateNestedOneWithoutVerifiedDocumentsInput
  }

  export type ProviderDocumentUncheckedCreateInput = {
    id?: number
    providerId: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: number | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderDocumentUpdateInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutDocumentsNestedInput
    verifiedByUser?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
  }

  export type ProviderDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentCreateManyInput = {
    id?: number
    providerId: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: number | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderDocumentUpdateManyMutationInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type EmailVerificationTokenListRelationFilter = {
    every?: EmailVerificationTokenWhereInput
    some?: EmailVerificationTokenWhereInput
    none?: EmailVerificationTokenWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type ServiceProviderNullableScalarRelationFilter = {
    is?: ServiceProviderWhereInput | null
    isNot?: ServiceProviderWhereInput | null
  }

  export type ProviderDocumentListRelationFilter = {
    every?: ProviderDocumentWhereInput
    some?: ProviderDocumentWhereInput
    none?: ProviderDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailVerificationTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metadata?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userType?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    languages?: SortOrder
    notificationPreferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PasswordResetTokenUserIdOtpCompoundUniqueInput = {
    userId: number
    otp: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationTokenUserIdOtpCompoundUniqueInput = {
    userId: number
    otp: string
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceCategoryNullableScalarRelationFilter = {
    is?: ServiceCategoryWhereInput | null
    isNot?: ServiceCategoryWhereInput | null
  }

  export type ServiceCategoryListRelationFilter = {
    every?: ServiceCategoryWhereInput
    some?: ServiceCategoryWhereInput
    none?: ServiceCategoryWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    parentCategoryId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentCategoryId?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    parentCategoryId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    iconUrl?: SortOrder
    parentCategoryId?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceCategorySumOrderByAggregateInput = {
    id?: SortOrder
    parentCategoryId?: SortOrder
    sortOrder?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ServiceCategoryScalarRelationFilter = {
    is?: ServiceCategoryWhereInput
    isNot?: ServiceCategoryWhereInput
  }

  export type ServicePricingTierListRelationFilter = {
    every?: ServicePricingTierWhereInput
    some?: ServicePricingTierWhereInput
    none?: ServicePricingTierWhereInput
  }

  export type ProviderServiceListRelationFilter = {
    every?: ProviderServiceWhereInput
    some?: ProviderServiceWhereInput
    none?: ProviderServiceWhereInput
  }

  export type ServicePricingTierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    imageUrls?: SortOrder
    requirements?: SortOrder
    isPopular?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    requirements?: SortOrder
    isPopular?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    requirements?: SortOrder
    isPopular?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    basePrice?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServicePricingTierCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    tierName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    includes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePricingTierAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type ServicePricingTierMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    tierName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePricingTierMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    tierName?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ServicePricingTierSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    price?: SortOrder
    durationMinutes?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProviderAvailabilityListRelationFilter = {
    every?: ProviderAvailabilityWhereInput
    some?: ProviderAvailabilityWhereInput
    none?: ProviderAvailabilityWhereInput
  }

  export type ProviderAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessRegistrationNumber?: SortOrder
    description?: SortOrder
    yearsExperience?: SortOrder
    serviceAreas?: SortOrder
    radiusKm?: SortOrder
    isInsured?: SortOrder
    isBackgroundChecked?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    isAcceptingNewJobs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    yearsExperience?: SortOrder
    radiusKm?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
  }

  export type ServiceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessRegistrationNumber?: SortOrder
    description?: SortOrder
    yearsExperience?: SortOrder
    radiusKm?: SortOrder
    isInsured?: SortOrder
    isBackgroundChecked?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    isAcceptingNewJobs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    businessRegistrationNumber?: SortOrder
    description?: SortOrder
    yearsExperience?: SortOrder
    radiusKm?: SortOrder
    isInsured?: SortOrder
    isBackgroundChecked?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    isAcceptingNewJobs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceProviderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    yearsExperience?: SortOrder
    radiusKm?: SortOrder
    totalRating?: SortOrder
    reviewCount?: SortOrder
    completedJobs?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ServiceProviderScalarRelationFilter = {
    is?: ServiceProviderWhereInput
    isNot?: ServiceProviderWhereInput
  }

  export type ProviderServiceProviderIdServiceIdCompoundUniqueInput = {
    providerId: number
    serviceId: number
  }

  export type ProviderServiceCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
  }

  export type ProviderServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceSumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    serviceId?: SortOrder
    customPrice?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProviderAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type ProviderAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isRecurring?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProviderDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    documentName?: SortOrder
    expirationDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    verifiedBy?: SortOrder
  }

  export type ProviderDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    documentName?: SortOrder
    expirationDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    documentName?: SortOrder
    expirationDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    verifiedBy?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EmailVerificationTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ServiceProviderCreateNestedOneWithoutUserInput = {
    create?: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutUserInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput = {
    create?: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput> | ProviderDocumentCreateWithoutVerifiedByUserInput[] | ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput | ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput[]
    createMany?: ProviderDocumentCreateManyVerifiedByUserInputEnvelope
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ServiceProviderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutUserInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput = {
    create?: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput> | ProviderDocumentCreateWithoutVerifiedByUserInput[] | ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput | ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput[]
    createMany?: ProviderDocumentCreateManyVerifiedByUserInputEnvelope
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ServiceProviderUpdateOneWithoutUserNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutUserInput
    upsert?: ServiceProviderUpsertWithoutUserInput
    disconnect?: ServiceProviderWhereInput | boolean
    delete?: ServiceProviderWhereInput | boolean
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutUserInput, ServiceProviderUpdateWithoutUserInput>, ServiceProviderUncheckedUpdateWithoutUserInput>
  }

  export type ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput = {
    create?: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput> | ProviderDocumentCreateWithoutVerifiedByUserInput[] | ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput | ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput[]
    upsert?: ProviderDocumentUpsertWithWhereUniqueWithoutVerifiedByUserInput | ProviderDocumentUpsertWithWhereUniqueWithoutVerifiedByUserInput[]
    createMany?: ProviderDocumentCreateManyVerifiedByUserInputEnvelope
    set?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    disconnect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    delete?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    update?: ProviderDocumentUpdateWithWhereUniqueWithoutVerifiedByUserInput | ProviderDocumentUpdateWithWhereUniqueWithoutVerifiedByUserInput[]
    updateMany?: ProviderDocumentUpdateManyWithWhereWithoutVerifiedByUserInput | ProviderDocumentUpdateManyWithWhereWithoutVerifiedByUserInput[]
    deleteMany?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput> | EmailVerificationTokenCreateWithoutUserInput[] | EmailVerificationTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput | EmailVerificationTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationTokenCreateManyUserInputEnvelope
    set?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    disconnect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    delete?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    connect?: EmailVerificationTokenWhereUniqueInput | EmailVerificationTokenWhereUniqueInput[]
    update?: EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput | EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationTokenUpdateManyWithWhereWithoutUserInput | EmailVerificationTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ServiceProviderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutUserInput
    upsert?: ServiceProviderUpsertWithoutUserInput
    disconnect?: ServiceProviderWhereInput | boolean
    delete?: ServiceProviderWhereInput | boolean
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutUserInput, ServiceProviderUpdateWithoutUserInput>, ServiceProviderUncheckedUpdateWithoutUserInput>
  }

  export type ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput = {
    create?: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput> | ProviderDocumentCreateWithoutVerifiedByUserInput[] | ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput | ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput[]
    upsert?: ProviderDocumentUpsertWithWhereUniqueWithoutVerifiedByUserInput | ProviderDocumentUpsertWithWhereUniqueWithoutVerifiedByUserInput[]
    createMany?: ProviderDocumentCreateManyVerifiedByUserInputEnvelope
    set?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    disconnect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    delete?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    update?: ProviderDocumentUpdateWithWhereUniqueWithoutVerifiedByUserInput | ProviderDocumentUpdateWithWhereUniqueWithoutVerifiedByUserInput[]
    updateMany?: ProviderDocumentUpdateManyWithWhereWithoutVerifiedByUserInput | ProviderDocumentUpdateManyWithWhereWithoutVerifiedByUserInput[]
    deleteMany?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
  }

  export type UserProfileCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type UserProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokensInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokensInput
    upsert?: UserUpsertWithoutEmailVerificationTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput, UserUpdateWithoutEmailVerificationTokensInput>, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type ServiceCategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<ServiceCategoryCreateWithoutSubCategoriesInput, ServiceCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: ServiceCategoryWhereUniqueInput
  }

  export type ServiceCategoryCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput> | ServiceCategoryCreateWithoutParentCategoryInput[] | ServiceCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutParentCategoryInput | ServiceCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: ServiceCategoryCreateManyParentCategoryInputEnvelope
    connect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput> | ServiceCategoryCreateWithoutParentCategoryInput[] | ServiceCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutParentCategoryInput | ServiceCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: ServiceCategoryCreateManyParentCategoryInputEnvelope
    connect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceCategoryUpdateOneWithoutSubCategoriesNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutSubCategoriesInput, ServiceCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: ServiceCategoryUpsertWithoutSubCategoriesInput
    disconnect?: ServiceCategoryWhereInput | boolean
    delete?: ServiceCategoryWhereInput | boolean
    connect?: ServiceCategoryWhereUniqueInput
    update?: XOR<XOR<ServiceCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, ServiceCategoryUpdateWithoutSubCategoriesInput>, ServiceCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ServiceCategoryUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput> | ServiceCategoryCreateWithoutParentCategoryInput[] | ServiceCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutParentCategoryInput | ServiceCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: ServiceCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | ServiceCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: ServiceCategoryCreateManyParentCategoryInputEnvelope
    set?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    disconnect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    delete?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    connect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    update?: ServiceCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | ServiceCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: ServiceCategoryUpdateManyWithWhereWithoutParentCategoryInput | ServiceCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: ServiceCategoryScalarWhereInput | ServiceCategoryScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput> | ServiceCategoryCreateWithoutParentCategoryInput[] | ServiceCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutParentCategoryInput | ServiceCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: ServiceCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | ServiceCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: ServiceCategoryCreateManyParentCategoryInputEnvelope
    set?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    disconnect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    delete?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    connect?: ServiceCategoryWhereUniqueInput | ServiceCategoryWhereUniqueInput[]
    update?: ServiceCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | ServiceCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: ServiceCategoryUpdateManyWithWhereWithoutParentCategoryInput | ServiceCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: ServiceCategoryScalarWhereInput | ServiceCategoryScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceCreateimageUrlsInput = {
    set: string[]
  }

  export type ServiceCategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicesInput
    connect?: ServiceCategoryWhereUniqueInput
  }

  export type ServicePricingTierCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput> | ServicePricingTierCreateWithoutServiceInput[] | ServicePricingTierUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePricingTierCreateOrConnectWithoutServiceInput | ServicePricingTierCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePricingTierCreateManyServiceInputEnvelope
    connect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
  }

  export type ProviderServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput> | ProviderServiceCreateWithoutServiceInput[] | ProviderServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutServiceInput | ProviderServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProviderServiceCreateManyServiceInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ServicePricingTierUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput> | ServicePricingTierCreateWithoutServiceInput[] | ServicePricingTierUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePricingTierCreateOrConnectWithoutServiceInput | ServicePricingTierCreateOrConnectWithoutServiceInput[]
    createMany?: ServicePricingTierCreateManyServiceInputEnvelope
    connect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
  }

  export type ProviderServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput> | ProviderServiceCreateWithoutServiceInput[] | ProviderServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutServiceInput | ProviderServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProviderServiceCreateManyServiceInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServiceUpdateimageUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicesInput
    upsert?: ServiceCategoryUpsertWithoutServicesInput
    connect?: ServiceCategoryWhereUniqueInput
    update?: XOR<XOR<ServiceCategoryUpdateToOneWithWhereWithoutServicesInput, ServiceCategoryUpdateWithoutServicesInput>, ServiceCategoryUncheckedUpdateWithoutServicesInput>
  }

  export type ServicePricingTierUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput> | ServicePricingTierCreateWithoutServiceInput[] | ServicePricingTierUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePricingTierCreateOrConnectWithoutServiceInput | ServicePricingTierCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePricingTierUpsertWithWhereUniqueWithoutServiceInput | ServicePricingTierUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePricingTierCreateManyServiceInputEnvelope
    set?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    disconnect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    delete?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    connect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    update?: ServicePricingTierUpdateWithWhereUniqueWithoutServiceInput | ServicePricingTierUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePricingTierUpdateManyWithWhereWithoutServiceInput | ServicePricingTierUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePricingTierScalarWhereInput | ServicePricingTierScalarWhereInput[]
  }

  export type ProviderServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput> | ProviderServiceCreateWithoutServiceInput[] | ProviderServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutServiceInput | ProviderServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutServiceInput | ProviderServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProviderServiceCreateManyServiceInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutServiceInput | ProviderServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutServiceInput | ProviderServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ServicePricingTierUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput> | ServicePricingTierCreateWithoutServiceInput[] | ServicePricingTierUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServicePricingTierCreateOrConnectWithoutServiceInput | ServicePricingTierCreateOrConnectWithoutServiceInput[]
    upsert?: ServicePricingTierUpsertWithWhereUniqueWithoutServiceInput | ServicePricingTierUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServicePricingTierCreateManyServiceInputEnvelope
    set?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    disconnect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    delete?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    connect?: ServicePricingTierWhereUniqueInput | ServicePricingTierWhereUniqueInput[]
    update?: ServicePricingTierUpdateWithWhereUniqueWithoutServiceInput | ServicePricingTierUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServicePricingTierUpdateManyWithWhereWithoutServiceInput | ServicePricingTierUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServicePricingTierScalarWhereInput | ServicePricingTierScalarWhereInput[]
  }

  export type ProviderServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput> | ProviderServiceCreateWithoutServiceInput[] | ProviderServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutServiceInput | ProviderServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutServiceInput | ProviderServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProviderServiceCreateManyServiceInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutServiceInput | ProviderServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutServiceInput | ProviderServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ServicePricingTierCreateincludesInput = {
    set: string[]
  }

  export type ServiceCreateNestedOneWithoutPricingTiersInput = {
    create?: XOR<ServiceCreateWithoutPricingTiersInput, ServiceUncheckedCreateWithoutPricingTiersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPricingTiersInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServicePricingTierUpdateincludesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceUpdateOneRequiredWithoutPricingTiersNestedInput = {
    create?: XOR<ServiceCreateWithoutPricingTiersInput, ServiceUncheckedCreateWithoutPricingTiersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPricingTiersInput
    upsert?: ServiceUpsertWithoutPricingTiersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPricingTiersInput, ServiceUpdateWithoutPricingTiersInput>, ServiceUncheckedUpdateWithoutPricingTiersInput>
  }

  export type ServiceProviderCreateserviceAreasInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutServiceProviderInput = {
    create?: XOR<UserCreateWithoutServiceProviderInput, UserUncheckedCreateWithoutServiceProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceProviderInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ProviderAvailabilityCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput> | ProviderAvailabilityCreateWithoutProviderInput[] | ProviderAvailabilityUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderAvailabilityCreateOrConnectWithoutProviderInput | ProviderAvailabilityCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderAvailabilityCreateManyProviderInputEnvelope
    connect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
  }

  export type ProviderDocumentCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput> | ProviderDocumentCreateWithoutProviderInput[] | ProviderDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutProviderInput | ProviderDocumentCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderDocumentCreateManyProviderInputEnvelope
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
  }

  export type ProviderServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ProviderAvailabilityUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput> | ProviderAvailabilityCreateWithoutProviderInput[] | ProviderAvailabilityUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderAvailabilityCreateOrConnectWithoutProviderInput | ProviderAvailabilityCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderAvailabilityCreateManyProviderInputEnvelope
    connect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
  }

  export type ProviderDocumentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput> | ProviderDocumentCreateWithoutProviderInput[] | ProviderDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutProviderInput | ProviderDocumentCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderDocumentCreateManyProviderInputEnvelope
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
  }

  export type ServiceProviderUpdateserviceAreasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServiceProviderNestedInput = {
    create?: XOR<UserCreateWithoutServiceProviderInput, UserUncheckedCreateWithoutServiceProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceProviderInput
    upsert?: UserUpsertWithoutServiceProviderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServiceProviderInput, UserUpdateWithoutServiceProviderInput>, UserUncheckedUpdateWithoutServiceProviderInput>
  }

  export type ProviderServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutProviderInput | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutProviderInput | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutProviderInput | ProviderServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ProviderAvailabilityUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput> | ProviderAvailabilityCreateWithoutProviderInput[] | ProviderAvailabilityUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderAvailabilityCreateOrConnectWithoutProviderInput | ProviderAvailabilityCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderAvailabilityUpsertWithWhereUniqueWithoutProviderInput | ProviderAvailabilityUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderAvailabilityCreateManyProviderInputEnvelope
    set?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    disconnect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    delete?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    connect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    update?: ProviderAvailabilityUpdateWithWhereUniqueWithoutProviderInput | ProviderAvailabilityUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderAvailabilityUpdateManyWithWhereWithoutProviderInput | ProviderAvailabilityUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderAvailabilityScalarWhereInput | ProviderAvailabilityScalarWhereInput[]
  }

  export type ProviderDocumentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput> | ProviderDocumentCreateWithoutProviderInput[] | ProviderDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutProviderInput | ProviderDocumentCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderDocumentUpsertWithWhereUniqueWithoutProviderInput | ProviderDocumentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderDocumentCreateManyProviderInputEnvelope
    set?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    disconnect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    delete?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    update?: ProviderDocumentUpdateWithWhereUniqueWithoutProviderInput | ProviderDocumentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderDocumentUpdateManyWithWhereWithoutProviderInput | ProviderDocumentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
  }

  export type ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutProviderInput | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutProviderInput | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutProviderInput | ProviderServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ProviderAvailabilityUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput> | ProviderAvailabilityCreateWithoutProviderInput[] | ProviderAvailabilityUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderAvailabilityCreateOrConnectWithoutProviderInput | ProviderAvailabilityCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderAvailabilityUpsertWithWhereUniqueWithoutProviderInput | ProviderAvailabilityUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderAvailabilityCreateManyProviderInputEnvelope
    set?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    disconnect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    delete?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    connect?: ProviderAvailabilityWhereUniqueInput | ProviderAvailabilityWhereUniqueInput[]
    update?: ProviderAvailabilityUpdateWithWhereUniqueWithoutProviderInput | ProviderAvailabilityUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderAvailabilityUpdateManyWithWhereWithoutProviderInput | ProviderAvailabilityUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderAvailabilityScalarWhereInput | ProviderAvailabilityScalarWhereInput[]
  }

  export type ProviderDocumentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput> | ProviderDocumentCreateWithoutProviderInput[] | ProviderDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderDocumentCreateOrConnectWithoutProviderInput | ProviderDocumentCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderDocumentUpsertWithWhereUniqueWithoutProviderInput | ProviderDocumentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderDocumentCreateManyProviderInputEnvelope
    set?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    disconnect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    delete?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    connect?: ProviderDocumentWhereUniqueInput | ProviderDocumentWhereUniqueInput[]
    update?: ProviderDocumentUpdateWithWhereUniqueWithoutProviderInput | ProviderDocumentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderDocumentUpdateManyWithWhereWithoutProviderInput | ProviderDocumentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
  }

  export type ServiceProviderCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutProviderServicesInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutProviderServicesInput
    upsert?: ServiceProviderUpsertWithoutProviderServicesInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutProviderServicesInput, ServiceProviderUpdateWithoutProviderServicesInput>, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderServicesInput
    upsert?: ServiceUpsertWithoutProviderServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutProviderServicesInput, ServiceUpdateWithoutProviderServicesInput>, ServiceUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceProviderCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ServiceProviderCreateWithoutAvailabilitiesInput, ServiceProviderUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutAvailabilitiesInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type ServiceProviderUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutAvailabilitiesInput, ServiceProviderUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ServiceProviderUpsertWithoutAvailabilitiesInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutAvailabilitiesInput, ServiceProviderUpdateWithoutAvailabilitiesInput>, ServiceProviderUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ServiceProviderCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ServiceProviderCreateWithoutDocumentsInput, ServiceProviderUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutDocumentsInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedDocumentsInput = {
    create?: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceProviderUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutDocumentsInput, ServiceProviderUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutDocumentsInput
    upsert?: ServiceProviderUpsertWithoutDocumentsInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutDocumentsInput, ServiceProviderUpdateWithoutDocumentsInput>, ServiceProviderUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateOneWithoutVerifiedDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedDocumentsInput
    upsert?: UserUpsertWithoutVerifiedDocumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedDocumentsInput, UserUpdateWithoutVerifiedDocumentsInput>, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bio?: string | null
    languages?: UserProfileCreatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bio?: string | null
    languages?: UserProfileCreatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateManyUserInputEnvelope = {
    data: EmailVerificationTokenCreateManyUserInput | EmailVerificationTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceProviderCreateWithoutUserInput = {
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutUserInput = {
    id?: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityUncheckedCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutUserInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
  }

  export type ProviderDocumentCreateWithoutVerifiedByUserInput = {
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutDocumentsInput
  }

  export type ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput = {
    id?: number
    providerId: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderDocumentCreateOrConnectWithoutVerifiedByUserInput = {
    where: ProviderDocumentWhereUniqueInput
    create: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput>
  }

  export type ProviderDocumentCreateManyVerifiedByUserInputEnvelope = {
    data: ProviderDocumentCreateManyVerifiedByUserInput | ProviderDocumentCreateManyVerifiedByUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserProfileUpdatelanguagesInput | string[]
    notificationPreferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationTokenScalarWhereInput
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailVerificationTokenScalarWhereInput = {
    AND?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    OR?: EmailVerificationTokenScalarWhereInput[]
    NOT?: EmailVerificationTokenScalarWhereInput | EmailVerificationTokenScalarWhereInput[]
    id?: IntFilter<"EmailVerificationToken"> | number
    userId?: IntFilter<"EmailVerificationToken"> | number
    otp?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    otp?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type ServiceProviderUpsertWithoutUserInput = {
    update: XOR<ServiceProviderUpdateWithoutUserInput, ServiceProviderUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceProviderCreateWithoutUserInput, ServiceProviderUncheckedCreateWithoutUserInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutUserInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutUserInput, ServiceProviderUncheckedUpdateWithoutUserInput>
  }

  export type ServiceProviderUpdateWithoutUserInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUncheckedUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderDocumentUpsertWithWhereUniqueWithoutVerifiedByUserInput = {
    where: ProviderDocumentWhereUniqueInput
    update: XOR<ProviderDocumentUpdateWithoutVerifiedByUserInput, ProviderDocumentUncheckedUpdateWithoutVerifiedByUserInput>
    create: XOR<ProviderDocumentCreateWithoutVerifiedByUserInput, ProviderDocumentUncheckedCreateWithoutVerifiedByUserInput>
  }

  export type ProviderDocumentUpdateWithWhereUniqueWithoutVerifiedByUserInput = {
    where: ProviderDocumentWhereUniqueInput
    data: XOR<ProviderDocumentUpdateWithoutVerifiedByUserInput, ProviderDocumentUncheckedUpdateWithoutVerifiedByUserInput>
  }

  export type ProviderDocumentUpdateManyWithWhereWithoutVerifiedByUserInput = {
    where: ProviderDocumentScalarWhereInput
    data: XOR<ProviderDocumentUpdateManyMutationInput, ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserInput>
  }

  export type ProviderDocumentScalarWhereInput = {
    AND?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
    OR?: ProviderDocumentScalarWhereInput[]
    NOT?: ProviderDocumentScalarWhereInput | ProviderDocumentScalarWhereInput[]
    id?: IntFilter<"ProviderDocument"> | number
    providerId?: IntFilter<"ProviderDocument"> | number
    documentType?: StringFilter<"ProviderDocument"> | string
    documentUrl?: StringFilter<"ProviderDocument"> | string
    documentName?: StringNullableFilter<"ProviderDocument"> | string | null
    expirationDate?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    isVerified?: BoolFilter<"ProviderDocument"> | boolean
    verifiedBy?: IntNullableFilter<"ProviderDocument"> | number | null
    verifiedAt?: DateTimeNullableFilter<"ProviderDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderDocument"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderUncheckedCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUncheckedUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderUncheckedCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUncheckedUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationTokensInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileCreateNestedOneWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokensInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderUncheckedCreateNestedOneWithoutUserInput
    verifiedDocuments?: ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
  }

  export type UserUpsertWithoutEmailVerificationTokensInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
    create: XOR<UserCreateWithoutEmailVerificationTokensInput, UserUncheckedCreateWithoutEmailVerificationTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokensInput, UserUncheckedUpdateWithoutEmailVerificationTokensInput>
  }

  export type UserUpdateWithoutEmailVerificationTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUncheckedUpdateOneWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type ServiceCategoryCreateWithoutSubCategoriesInput = {
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    parentCategory?: ServiceCategoryCreateNestedOneWithoutSubCategoriesInput
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    parentCategoryId?: number | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutSubCategoriesInput, ServiceCategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ServiceCategoryCreateWithoutParentCategoryInput = {
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: ServiceCategoryCreateNestedManyWithoutParentCategoryInput
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryUncheckedCreateWithoutParentCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: ServiceCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ServiceCategoryCreateOrConnectWithoutParentCategoryInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type ServiceCategoryCreateManyParentCategoryInputEnvelope = {
    data: ServiceCategoryCreateManyParentCategoryInput | ServiceCategoryCreateManyParentCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutCategoryInput = {
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: ServicePricingTierCreateNestedManyWithoutServiceInput
    providerServices?: ProviderServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: ServicePricingTierUncheckedCreateNestedManyWithoutServiceInput
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<ServiceCategoryUpdateWithoutSubCategoriesInput, ServiceCategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<ServiceCategoryCreateWithoutSubCategoriesInput, ServiceCategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: ServiceCategoryWhereInput
  }

  export type ServiceCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: ServiceCategoryWhereInput
    data: XOR<ServiceCategoryUpdateWithoutSubCategoriesInput, ServiceCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ServiceCategoryUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: ServiceCategoryUpdateOneWithoutSubCategoriesNestedInput
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = {
    where: ServiceCategoryWhereUniqueInput
    update: XOR<ServiceCategoryUpdateWithoutParentCategoryInput, ServiceCategoryUncheckedUpdateWithoutParentCategoryInput>
    create: XOR<ServiceCategoryCreateWithoutParentCategoryInput, ServiceCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type ServiceCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = {
    where: ServiceCategoryWhereUniqueInput
    data: XOR<ServiceCategoryUpdateWithoutParentCategoryInput, ServiceCategoryUncheckedUpdateWithoutParentCategoryInput>
  }

  export type ServiceCategoryUpdateManyWithWhereWithoutParentCategoryInput = {
    where: ServiceCategoryScalarWhereInput
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyWithoutParentCategoryInput>
  }

  export type ServiceCategoryScalarWhereInput = {
    AND?: ServiceCategoryScalarWhereInput | ServiceCategoryScalarWhereInput[]
    OR?: ServiceCategoryScalarWhereInput[]
    NOT?: ServiceCategoryScalarWhereInput | ServiceCategoryScalarWhereInput[]
    id?: IntFilter<"ServiceCategory"> | number
    name?: StringFilter<"ServiceCategory"> | string
    slug?: StringFilter<"ServiceCategory"> | string
    description?: StringNullableFilter<"ServiceCategory"> | string | null
    iconUrl?: StringNullableFilter<"ServiceCategory"> | string | null
    parentCategoryId?: IntNullableFilter<"ServiceCategory"> | number | null
    sortOrder?: IntFilter<"ServiceCategory"> | number
    isActive?: BoolFilter<"ServiceCategory"> | boolean
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    categoryId?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    basePrice?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntNullableFilter<"Service"> | number | null
    imageUrls?: StringNullableListFilter<"Service">
    requirements?: StringNullableFilter<"Service"> | string | null
    isPopular?: BoolFilter<"Service"> | boolean
    isActive?: BoolFilter<"Service"> | boolean
    sortOrder?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type ServiceCategoryCreateWithoutServicesInput = {
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    parentCategory?: ServiceCategoryCreateNestedOneWithoutSubCategoriesInput
    subCategories?: ServiceCategoryCreateNestedManyWithoutParentCategoryInput
  }

  export type ServiceCategoryUncheckedCreateWithoutServicesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    parentCategoryId?: number | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: ServiceCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
  }

  export type ServiceCategoryCreateOrConnectWithoutServicesInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
  }

  export type ServicePricingTierCreateWithoutServiceInput = {
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ServicePricingTierUncheckedCreateWithoutServiceInput = {
    id?: number
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ServicePricingTierCreateOrConnectWithoutServiceInput = {
    where: ServicePricingTierWhereUniqueInput
    create: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput>
  }

  export type ServicePricingTierCreateManyServiceInputEnvelope = {
    data: ServicePricingTierCreateManyServiceInput | ServicePricingTierCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProviderServiceCreateWithoutServiceInput = {
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateWithoutServiceInput = {
    id?: number
    providerId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ProviderServiceCreateOrConnectWithoutServiceInput = {
    where: ProviderServiceWhereUniqueInput
    create: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProviderServiceCreateManyServiceInputEnvelope = {
    data: ProviderServiceCreateManyServiceInput | ProviderServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCategoryUpsertWithoutServicesInput = {
    update: XOR<ServiceCategoryUpdateWithoutServicesInput, ServiceCategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceCategoryCreateWithoutServicesInput, ServiceCategoryUncheckedCreateWithoutServicesInput>
    where?: ServiceCategoryWhereInput
  }

  export type ServiceCategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceCategoryWhereInput
    data: XOR<ServiceCategoryUpdateWithoutServicesInput, ServiceCategoryUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceCategoryUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCategory?: ServiceCategoryUpdateOneWithoutSubCategoriesNestedInput
    subCategories?: ServiceCategoryUpdateManyWithoutParentCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: ServiceCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
  }

  export type ServicePricingTierUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServicePricingTierWhereUniqueInput
    update: XOR<ServicePricingTierUpdateWithoutServiceInput, ServicePricingTierUncheckedUpdateWithoutServiceInput>
    create: XOR<ServicePricingTierCreateWithoutServiceInput, ServicePricingTierUncheckedCreateWithoutServiceInput>
  }

  export type ServicePricingTierUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServicePricingTierWhereUniqueInput
    data: XOR<ServicePricingTierUpdateWithoutServiceInput, ServicePricingTierUncheckedUpdateWithoutServiceInput>
  }

  export type ServicePricingTierUpdateManyWithWhereWithoutServiceInput = {
    where: ServicePricingTierScalarWhereInput
    data: XOR<ServicePricingTierUpdateManyMutationInput, ServicePricingTierUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServicePricingTierScalarWhereInput = {
    AND?: ServicePricingTierScalarWhereInput | ServicePricingTierScalarWhereInput[]
    OR?: ServicePricingTierScalarWhereInput[]
    NOT?: ServicePricingTierScalarWhereInput | ServicePricingTierScalarWhereInput[]
    id?: IntFilter<"ServicePricingTier"> | number
    serviceId?: IntFilter<"ServicePricingTier"> | number
    tierName?: StringFilter<"ServicePricingTier"> | string
    description?: StringNullableFilter<"ServicePricingTier"> | string | null
    price?: DecimalFilter<"ServicePricingTier"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ServicePricingTier"> | number
    includes?: StringNullableListFilter<"ServicePricingTier">
    sortOrder?: IntFilter<"ServicePricingTier"> | number
    createdAt?: DateTimeFilter<"ServicePricingTier"> | Date | string
  }

  export type ProviderServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProviderServiceWhereUniqueInput
    update: XOR<ProviderServiceUpdateWithoutServiceInput, ProviderServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<ProviderServiceCreateWithoutServiceInput, ProviderServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProviderServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProviderServiceWhereUniqueInput
    data: XOR<ProviderServiceUpdateWithoutServiceInput, ProviderServiceUncheckedUpdateWithoutServiceInput>
  }

  export type ProviderServiceUpdateManyWithWhereWithoutServiceInput = {
    where: ProviderServiceScalarWhereInput
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProviderServiceScalarWhereInput = {
    AND?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
    OR?: ProviderServiceScalarWhereInput[]
    NOT?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
    id?: IntFilter<"ProviderService"> | number
    providerId?: IntFilter<"ProviderService"> | number
    serviceId?: IntFilter<"ProviderService"> | number
    customPrice?: DecimalNullableFilter<"ProviderService"> | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFilter<"ProviderService"> | boolean
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
  }

  export type ServiceCreateWithoutPricingTiersInput = {
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ServiceCategoryCreateNestedOneWithoutServicesInput
    providerServices?: ProviderServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPricingTiersInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPricingTiersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPricingTiersInput, ServiceUncheckedCreateWithoutPricingTiersInput>
  }

  export type ServiceUpsertWithoutPricingTiersInput = {
    update: XOR<ServiceUpdateWithoutPricingTiersInput, ServiceUncheckedUpdateWithoutPricingTiersInput>
    create: XOR<ServiceCreateWithoutPricingTiersInput, ServiceUncheckedCreateWithoutPricingTiersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPricingTiersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPricingTiersInput, ServiceUncheckedUpdateWithoutPricingTiersInput>
  }

  export type ServiceUpdateWithoutPricingTiersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPricingTiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutServiceProviderInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    verifiedDocuments?: ProviderDocumentCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserUncheckedCreateWithoutServiceProviderInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    verifiedDocuments?: ProviderDocumentUncheckedCreateNestedManyWithoutVerifiedByUserInput
  }

  export type UserCreateOrConnectWithoutServiceProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceProviderInput, UserUncheckedCreateWithoutServiceProviderInput>
  }

  export type ProviderServiceCreateWithoutProviderInput = {
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateWithoutProviderInput = {
    id?: number
    serviceId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ProviderServiceCreateOrConnectWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    create: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput>
  }

  export type ProviderServiceCreateManyProviderInputEnvelope = {
    data: ProviderServiceCreateManyProviderInput | ProviderServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderAvailabilityCreateWithoutProviderInput = {
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderAvailabilityUncheckedCreateWithoutProviderInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderAvailabilityCreateOrConnectWithoutProviderInput = {
    where: ProviderAvailabilityWhereUniqueInput
    create: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput>
  }

  export type ProviderAvailabilityCreateManyProviderInputEnvelope = {
    data: ProviderAvailabilityCreateManyProviderInput | ProviderAvailabilityCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderDocumentCreateWithoutProviderInput = {
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    verifiedByUser?: UserCreateNestedOneWithoutVerifiedDocumentsInput
  }

  export type ProviderDocumentUncheckedCreateWithoutProviderInput = {
    id?: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: number | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderDocumentCreateOrConnectWithoutProviderInput = {
    where: ProviderDocumentWhereUniqueInput
    create: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput>
  }

  export type ProviderDocumentCreateManyProviderInputEnvelope = {
    data: ProviderDocumentCreateManyProviderInput | ProviderDocumentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServiceProviderInput = {
    update: XOR<UserUpdateWithoutServiceProviderInput, UserUncheckedUpdateWithoutServiceProviderInput>
    create: XOR<UserCreateWithoutServiceProviderInput, UserUncheckedCreateWithoutServiceProviderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServiceProviderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServiceProviderInput, UserUncheckedUpdateWithoutServiceProviderInput>
  }

  export type UserUpdateWithoutServiceProviderInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    verifiedDocuments?: ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserNestedInput
  }

  export type ProviderServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    update: XOR<ProviderServiceUpdateWithoutProviderInput, ProviderServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput>
  }

  export type ProviderServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    data: XOR<ProviderServiceUpdateWithoutProviderInput, ProviderServiceUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderServiceScalarWhereInput
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderAvailabilityUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderAvailabilityWhereUniqueInput
    update: XOR<ProviderAvailabilityUpdateWithoutProviderInput, ProviderAvailabilityUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderAvailabilityCreateWithoutProviderInput, ProviderAvailabilityUncheckedCreateWithoutProviderInput>
  }

  export type ProviderAvailabilityUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderAvailabilityWhereUniqueInput
    data: XOR<ProviderAvailabilityUpdateWithoutProviderInput, ProviderAvailabilityUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderAvailabilityUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderAvailabilityScalarWhereInput
    data: XOR<ProviderAvailabilityUpdateManyMutationInput, ProviderAvailabilityUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProviderAvailabilityScalarWhereInput = {
    AND?: ProviderAvailabilityScalarWhereInput | ProviderAvailabilityScalarWhereInput[]
    OR?: ProviderAvailabilityScalarWhereInput[]
    NOT?: ProviderAvailabilityScalarWhereInput | ProviderAvailabilityScalarWhereInput[]
    id?: IntFilter<"ProviderAvailability"> | number
    providerId?: IntFilter<"ProviderAvailability"> | number
    dayOfWeek?: IntFilter<"ProviderAvailability"> | number
    startTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    endTime?: DateTimeFilter<"ProviderAvailability"> | Date | string
    isRecurring?: BoolFilter<"ProviderAvailability"> | boolean
    validFrom?: DateTimeFilter<"ProviderAvailability"> | Date | string
    validUntil?: DateTimeNullableFilter<"ProviderAvailability"> | Date | string | null
    createdAt?: DateTimeFilter<"ProviderAvailability"> | Date | string
  }

  export type ProviderDocumentUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderDocumentWhereUniqueInput
    update: XOR<ProviderDocumentUpdateWithoutProviderInput, ProviderDocumentUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderDocumentCreateWithoutProviderInput, ProviderDocumentUncheckedCreateWithoutProviderInput>
  }

  export type ProviderDocumentUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderDocumentWhereUniqueInput
    data: XOR<ProviderDocumentUpdateWithoutProviderInput, ProviderDocumentUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderDocumentUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderDocumentScalarWhereInput
    data: XOR<ProviderDocumentUpdateManyMutationInput, ProviderDocumentUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceProviderCreateWithoutProviderServicesInput = {
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServiceProviderInput
    availabilities?: ProviderAvailabilityCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutProviderServicesInput = {
    id?: number
    userId: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: ProviderAvailabilityUncheckedCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutProviderServicesInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
  }

  export type ServiceCreateWithoutProviderServicesInput = {
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: ServiceCategoryCreateNestedOneWithoutServicesInput
    pricingTiers?: ServicePricingTierCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProviderServicesInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingTiers?: ServicePricingTierUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProviderServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
  }

  export type ServiceProviderUpsertWithoutProviderServicesInput = {
    update: XOR<ServiceProviderUpdateWithoutProviderServicesInput, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutProviderServicesInput, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceProviderUpdateWithoutProviderServicesInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServiceProviderNestedInput
    availabilities?: ProviderAvailabilityUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutProviderServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: ProviderAvailabilityUncheckedUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceUpsertWithoutProviderServicesInput = {
    update: XOR<ServiceUpdateWithoutProviderServicesInput, ServiceUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutProviderServicesInput, ServiceUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceUpdateWithoutProviderServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: ServiceCategoryUpdateOneRequiredWithoutServicesNestedInput
    pricingTiers?: ServicePricingTierUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProviderServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: ServicePricingTierUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceProviderCreateWithoutAvailabilitiesInput = {
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServiceProviderInput
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    userId: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    documents?: ProviderDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutAvailabilitiesInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutAvailabilitiesInput, ServiceProviderUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ServiceProviderUpsertWithoutAvailabilitiesInput = {
    update: XOR<ServiceProviderUpdateWithoutAvailabilitiesInput, ServiceProviderUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ServiceProviderCreateWithoutAvailabilitiesInput, ServiceProviderUncheckedCreateWithoutAvailabilitiesInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutAvailabilitiesInput, ServiceProviderUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ServiceProviderUpdateWithoutAvailabilitiesInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServiceProviderNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    documents?: ProviderDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderCreateWithoutDocumentsInput = {
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutServiceProviderInput
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutDocumentsInput = {
    id?: number
    userId: number
    businessName?: string | null
    businessRegistrationNumber?: string | null
    description?: string | null
    yearsExperience?: number | null
    serviceAreas?: ServiceProviderCreateserviceAreasInput | string[]
    radiusKm?: number | null
    isInsured?: boolean
    isBackgroundChecked?: boolean
    totalRating?: number
    reviewCount?: number
    completedJobs?: number
    isVerified?: boolean
    verificationStatus?: string
    isAcceptingNewJobs?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    availabilities?: ProviderAvailabilityUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutDocumentsInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutDocumentsInput, ServiceProviderUncheckedCreateWithoutDocumentsInput>
  }

  export type UserCreateWithoutVerifiedDocumentsInput = {
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedDocumentsInput = {
    id?: number
    email: string
    phone?: string | null
    passwordHash: string
    firstName?: string | null
    lastName?: string | null
    userType: $Enums.UserType
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    serviceProvider?: ServiceProviderUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
  }

  export type ServiceProviderUpsertWithoutDocumentsInput = {
    update: XOR<ServiceProviderUpdateWithoutDocumentsInput, ServiceProviderUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ServiceProviderCreateWithoutDocumentsInput, ServiceProviderUncheckedCreateWithoutDocumentsInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutDocumentsInput, ServiceProviderUncheckedUpdateWithoutDocumentsInput>
  }

  export type ServiceProviderUpdateWithoutDocumentsInput = {
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServiceProviderNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    serviceAreas?: ServiceProviderUpdateserviceAreasInput | string[]
    radiusKm?: NullableIntFieldUpdateOperationsInput | number | null
    isInsured?: BoolFieldUpdateOperationsInput | boolean
    isBackgroundChecked?: BoolFieldUpdateOperationsInput | boolean
    totalRating?: FloatFieldUpdateOperationsInput | number
    reviewCount?: IntFieldUpdateOperationsInput | number
    completedJobs?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: StringFieldUpdateOperationsInput | string
    isAcceptingNewJobs?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    availabilities?: ProviderAvailabilityUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UserUpsertWithoutVerifiedDocumentsInput = {
    update: XOR<UserUpdateWithoutVerifiedDocumentsInput, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
    create: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedDocumentsInput, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
  }

  export type UserUpdateWithoutVerifiedDocumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationTokens?: EmailVerificationTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    serviceProvider?: ServiceProviderUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmailVerificationTokenCreateManyUserInput = {
    id?: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: number
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ProviderDocumentCreateManyVerifiedByUserInput = {
    id?: number
    providerId: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentUpdateWithoutVerifiedByUserInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ProviderDocumentUncheckedUpdateWithoutVerifiedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentUncheckedUpdateManyWithoutVerifiedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryCreateManyParentCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    iconUrl?: string | null
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    basePrice: Decimal | DecimalJsLike | number | string
    durationMinutes?: number | null
    imageUrls?: ServiceCreateimageUrlsInput | string[]
    requirements?: string | null
    isPopular?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryUpdateWithoutParentCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: ServiceCategoryUpdateManyWithoutParentCategoryNestedInput
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateWithoutParentCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: ServiceCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateManyWithoutParentCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: ServicePricingTierUpdateManyWithoutServiceNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingTiers?: ServicePricingTierUncheckedUpdateManyWithoutServiceNestedInput
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrls?: ServiceUpdateimageUrlsInput | string[]
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierCreateManyServiceInput = {
    id?: number
    tierName: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    includes?: ServicePricingTierCreateincludesInput | string[]
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ProviderServiceCreateManyServiceInput = {
    id?: number
    providerId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ServicePricingTierUpdateWithoutServiceInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicePricingTierUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    includes?: ServicePricingTierUpdateincludesInput | string[]
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUpdateWithoutServiceInput = {
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateManyProviderInput = {
    id?: number
    serviceId: number
    customPrice?: Decimal | DecimalJsLike | number | string | null
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type ProviderAvailabilityCreateManyProviderInput = {
    id?: number
    dayOfWeek: number
    startTime: Date | string
    endTime: Date | string
    isRecurring?: boolean
    validFrom?: Date | string
    validUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderDocumentCreateManyProviderInput = {
    id?: number
    documentType: string
    documentUrl: string
    documentName?: string | null
    expirationDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: number | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateWithoutProviderInput = {
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    customPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityUpdateWithoutProviderInput = {
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderAvailabilityUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentUpdateWithoutProviderInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedByUser?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
  }

  export type ProviderDocumentUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderDocumentUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    documentName?: NullableStringFieldUpdateOperationsInput | string | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}