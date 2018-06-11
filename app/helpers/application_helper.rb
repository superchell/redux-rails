module ApplicationHelper
  def json_records(records = {}, options = {})
    json_serialized(records.to_a, options)
  end

  def json_record(record = {}, options = {})
    json_serialized(record, options)
  end

  def json_serialized(object = {}, options = {})
    object.as_json
  end
end
