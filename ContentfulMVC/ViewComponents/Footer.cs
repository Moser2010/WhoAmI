using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contentful.Core;
using Contentful.Core.Search;
using ContentfulMVC.Models;

namespace ContentfulMVC.ViewComponents
{
    public class Footer: ViewComponent
    {
        private readonly IContentfulClient _client;
        public Footer(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            //I dont fully understand the next two lines. I kinda understand what they are asking for but not fully!
            var qb = QueryBuilder<MetaData>.New.FieldEquals("sys.id", "3A1FviHKNy6IQqSAq4UocQ");
            var home = (await _client.GetEntriesAsync<MetaData>(qb)).FirstOrDefault();
            return View(home);
        }
    }
}
