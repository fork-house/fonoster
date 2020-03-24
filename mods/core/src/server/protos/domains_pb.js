/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf')
var goog = jspb
var global = Function('return this')()

goog.exportSymbol(
  'proto.yaps.domains.v1alpha1.CreateDomainRequest',
  null,
  global
)
goog.exportSymbol('proto.yaps.domains.v1alpha1.Domain', null, global)

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.yaps.domains.v1alpha1.CreateDomainRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.yaps.domains.v1alpha1.CreateDomainRequest.displayName =
    'proto.yaps.domains.v1alpha1.CreateDomainRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.yaps.domains.v1alpha1.CreateDomainRequest.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.yaps.domains.v1alpha1.CreateDomainRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.yaps.domains.v1alpha1.CreateDomainRequest.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        domain:
          (f = msg.getDomain()) &&
          proto.yaps.domains.v1alpha1.Domain.toObject(includeInstance, f)
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yaps.domains.v1alpha1.CreateDomainRequest}
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.yaps.domains.v1alpha1.CreateDomainRequest()
  return proto.yaps.domains.v1alpha1.CreateDomainRequest.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yaps.domains.v1alpha1.CreateDomainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yaps.domains.v1alpha1.CreateDomainRequest}
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = new proto.yaps.domains.v1alpha1.Domain()
        reader.readMessage(
          value,
          proto.yaps.domains.v1alpha1.Domain.deserializeBinaryFromReader
        )
        msg.setDomain(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.yaps.domains.v1alpha1.CreateDomainRequest.serializeBinaryToWriter(
    this,
    writer
  )
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yaps.domains.v1alpha1.CreateDomainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getDomain()
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.yaps.domains.v1alpha1.Domain.serializeBinaryToWriter
    )
  }
}

/**
 * optional Domain domain = 1;
 * @return {?proto.yaps.domains.v1alpha1.Domain}
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.getDomain = function () {
  return /** @type{?proto.yaps.domains.v1alpha1.Domain} */ (jspb.Message.getWrapperField(
    this,
    proto.yaps.domains.v1alpha1.Domain,
    1
  ))
}

/** @param {?proto.yaps.domains.v1alpha1.Domain|undefined} value */
proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.setDomain = function (
  value
) {
  jspb.Message.setWrapperField(this, 1, value)
}

proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.clearDomain = function () {
  this.setDomain(undefined)
}

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.yaps.domains.v1alpha1.CreateDomainRequest.prototype.hasDomain = function () {
  return jspb.Message.getField(this, 1) != null
}

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.yaps.domains.v1alpha1.Domain = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.yaps.domains.v1alpha1.Domain.repeatedFields_,
    null
  )
}
goog.inherits(proto.yaps.domains.v1alpha1.Domain, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  proto.yaps.domains.v1alpha1.Domain.displayName =
    'proto.yaps.domains.v1alpha1.Domain'
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.yaps.domains.v1alpha1.Domain.repeatedFields_ = [6, 7]

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.yaps.domains.v1alpha1.Domain.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.yaps.domains.v1alpha1.Domain.toObject(
      opt_includeInstance,
      this
    )
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.yaps.domains.v1alpha1.Domain} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.yaps.domains.v1alpha1.Domain.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        ref: jspb.Message.getFieldWithDefault(msg, 1, ''),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
        domainUri: jspb.Message.getFieldWithDefault(msg, 3, ''),
        egressRule: jspb.Message.getFieldWithDefault(msg, 4, ''),
        egressNumberRef: jspb.Message.getFieldWithDefault(msg, 5, ''),
        accessDenyList: jspb.Message.getRepeatedField(msg, 6),
        accessAllowList: jspb.Message.getRepeatedField(msg, 7),
        createTime: jspb.Message.getFieldWithDefault(msg, 8, ''),
        updateTime: jspb.Message.getFieldWithDefault(msg, 9, '')
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.yaps.domains.v1alpha1.Domain}
 */
proto.yaps.domains.v1alpha1.Domain.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.yaps.domains.v1alpha1.Domain()
  return proto.yaps.domains.v1alpha1.Domain.deserializeBinaryFromReader(
    msg,
    reader
  )
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.yaps.domains.v1alpha1.Domain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.yaps.domains.v1alpha1.Domain}
 */
proto.yaps.domains.v1alpha1.Domain.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setRef(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setName(value)
        break
      case 3:
        var value = /** @type {string} */ (reader.readString())
        msg.setDomainUri(value)
        break
      case 4:
        var value = /** @type {string} */ (reader.readString())
        msg.setEgressRule(value)
        break
      case 5:
        var value = /** @type {string} */ (reader.readString())
        msg.setEgressNumberRef(value)
        break
      case 6:
        var value = /** @type {string} */ (reader.readString())
        msg.addAccessDeny(value)
        break
      case 7:
        var value = /** @type {string} */ (reader.readString())
        msg.addAccessAllow(value)
        break
      case 8:
        var value = /** @type {string} */ (reader.readString())
        msg.setCreateTime(value)
        break
      case 9:
        var value = /** @type {string} */ (reader.readString())
        msg.setUpdateTime(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.yaps.domains.v1alpha1.Domain.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.yaps.domains.v1alpha1.Domain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.yaps.domains.v1alpha1.Domain.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined
  f = message.getRef()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
  f = message.getName()
  if (f.length > 0) {
    writer.writeString(2, f)
  }
  f = message.getDomainUri()
  if (f.length > 0) {
    writer.writeString(3, f)
  }
  f = message.getEgressRule()
  if (f.length > 0) {
    writer.writeString(4, f)
  }
  f = message.getEgressNumberRef()
  if (f.length > 0) {
    writer.writeString(5, f)
  }
  f = message.getAccessDenyList()
  if (f.length > 0) {
    writer.writeRepeatedString(6, f)
  }
  f = message.getAccessAllowList()
  if (f.length > 0) {
    writer.writeRepeatedString(7, f)
  }
  f = message.getCreateTime()
  if (f.length > 0) {
    writer.writeString(8, f)
  }
  f = message.getUpdateTime()
  if (f.length > 0) {
    writer.writeString(9, f)
  }
}

/**
 * optional string ref = 1;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getRef = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setRef = function (value) {
  jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * optional string name = 2;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * optional string domain_uri = 3;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getDomainUri = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setDomainUri = function (value) {
  jspb.Message.setProto3StringField(this, 3, value)
}

/**
 * optional string egress_rule = 4;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getEgressRule = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setEgressRule = function (value) {
  jspb.Message.setProto3StringField(this, 4, value)
}

/**
 * optional string egress_number_ref = 5;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getEgressNumberRef = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setEgressNumberRef = function (
  value
) {
  jspb.Message.setProto3StringField(this, 5, value)
}

/**
 * repeated string access_deny = 6;
 * @return {!Array<string>}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getAccessDenyList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6))
}

/** @param {!Array<string>} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setAccessDenyList = function (
  value
) {
  jspb.Message.setField(this, 6, value || [])
}

/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.yaps.domains.v1alpha1.Domain.prototype.addAccessDeny = function (
  value,
  opt_index
) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index)
}

proto.yaps.domains.v1alpha1.Domain.prototype.clearAccessDenyList = function () {
  this.setAccessDenyList([])
}

/**
 * repeated string access_allow = 7;
 * @return {!Array<string>}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getAccessAllowList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7))
}

/** @param {!Array<string>} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setAccessAllowList = function (
  value
) {
  jspb.Message.setField(this, 7, value || [])
}

/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.yaps.domains.v1alpha1.Domain.prototype.addAccessAllow = function (
  value,
  opt_index
) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index)
}

proto.yaps.domains.v1alpha1.Domain.prototype.clearAccessAllowList = function () {
  this.setAccessAllowList([])
}

/**
 * optional string create_time = 8;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getCreateTime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 8, value)
}

/**
 * optional string update_time = 9;
 * @return {string}
 */
proto.yaps.domains.v1alpha1.Domain.prototype.getUpdateTime = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''))
}

/** @param {string} value */
proto.yaps.domains.v1alpha1.Domain.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 9, value)
}

goog.object.extend(exports, proto.yaps.domains.v1alpha1)
