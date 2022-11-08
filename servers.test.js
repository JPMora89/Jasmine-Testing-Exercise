describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
  
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    
    serverTbody.innerHTML = '';
    delete allServers['server1'];
    serverId = 0;

  });
})

describe("updateServerTable tests when there is an assigned server but no final bill", function () {

  beforeEach(function () {
  allServers.server1 = { serverName: 'Pablo' };
    updateServerTable();
  });

  it('Passes when a server is added with no tip amount', function () {
    expect(serverTbody.innerHTML).toContain('Pablo');

  });


  afterEach(function () {
    serverTbody.innerHTML = '';
    delete allServers["server1"];
  });

});