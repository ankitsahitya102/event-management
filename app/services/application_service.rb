class ApplicationService

  def initialize params, opt = {}
    @params = params
    @opt = opt
  end

  def process
    raise 'process method not implemented'
  end

end