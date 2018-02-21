using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContentfulMVC.Models;
using Contentful.Core;
using Contentful.Core.Models;
using Contentful.Core.Search;

namespace ContentfulMVC.Controllers
{
    public class PostsController : Controller
    {
        private readonly IContentfulClient _client;
        public PostsController(IContentfulClient client)
        {
            _client = client;
        }
        public async Task<IActionResult> Index()
        {
            var allPosts = await _client.GetEntriesAsync<Posts>();
            return View(allPosts);
        }
        public async Task<IActionResult> SinglePost(string id)
        {
            var post = await _client.GetEntryAsync<Posts>(id);
            return View(post);
        }
    }
}