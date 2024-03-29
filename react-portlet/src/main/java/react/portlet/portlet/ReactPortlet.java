package react.portlet.portlet;

import com.liferay.portal.kernel.configuration.Configuration;
import com.liferay.portal.kernel.configuration.ConfigurationFactoryUtil;
import react.portlet.constants.ReactPortletKeys;

import com.liferay.frontend.js.loader.modules.extender.npm.NPMResolver;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import java.io.IOException;

import javax.portlet.Portlet;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.Activate;

/**
 * @author kza
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.header-portlet-css=/css/index.css",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + ReactPortletKeys.React,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class ReactPortlet extends MVCPortlet {

	@Reference
	private NPMResolver npmResolver;

	private boolean modeDev;

	@Activate
	protected void activate() {
		Configuration _configuration = ConfigurationFactoryUtil
				.getConfiguration(ReactPortlet.class.getClassLoader(), "modeDev");
		modeDev = Boolean.parseBoolean(_configuration.get("development"));
	}

	@Override
	public void doView(
			RenderRequest renderRequest, RenderResponse renderResponse)
			throws IOException, PortletException {

		renderRequest.setAttribute(
				"mainRequire",
				npmResolver.resolveModuleName("react-portlet") + " as main");
		renderRequest.setAttribute("modeDev", modeDev);

		super.doView(renderRequest, renderResponse);
	}

}